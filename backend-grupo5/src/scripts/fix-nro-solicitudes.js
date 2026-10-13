const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const Solicitud = require("../models/solicitud");

async function run() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Conectado a MongoDB");

        // Traemos todas las solicitudes en orden determinístico (por creación)
        const solicitudes = await Solicitud.find({})
            .sort({ createdAt: 1, _id: 1 })
            .select("_id nro")
            .lean();

        if (!solicitudes.length) {
            console.log("ℹ️ No hay solicitudes para actualizar.");
            return;
        }

        let actualizadas = 0;
        const ops = [];

        for (let i = 0; i < solicitudes.length; i++) {
            const s = solicitudes[i];
            const nuevoNro = String(i).padStart(4, "0"); // 0000, 0001, ...
            if (s.nro !== nuevoNro) {
                ops.push({
                    updateOne: {
                        filter: { _id: s._id },
                        update: { $set: { nro: nuevoNro } },
                    },
                });
            }
        }

        if (ops.length > 0) {
            const res = await Solicitud.bulkWrite(ops, { ordered: false });
            actualizadas = res.modifiedCount || 0;
        }

        console.log(`📦 Total solicitudes: ${solicitudes.length}`);
        console.log(`✳️ Actualizadas: ${actualizadas}`);
        if (solicitudes.length > 0) {
            const primero = String(0).padStart(4, "0");
            const ultimo = String(solicitudes.length - 1).padStart(4, "0");
            console.log(`🔢 Rango asignado: ${primero} → ${ultimo}`);
            if (solicitudes.length > 10000) {
                console.warn("⚠️ Hay más de 9999 solicitudes. A partir de 10000, el nro superará 4 dígitos.");
            }
        }
        console.log("✅ Proceso completado.");
    } catch (err) {
        console.error("❌ Error al fijar nros de solicitudes:", err);
        process.exitCode = 1;
    } finally {
        await mongoose.connection.close();
        console.log("🔌 Conexión a MongoDB cerrada");
        process.exit();
    }
}

console.log("🚀 Iniciando fix de nro en solicitudes (formato 4 dígitos desde 0000)...");
run();
