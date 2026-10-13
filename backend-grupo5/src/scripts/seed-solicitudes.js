const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

// Importar modelos
const Socio = require("../models/socio"); // Asegúrate de que esta ruta sea correcta
const Solicitud = require("../models/solicitud"); // Modelo completo con prestadorAsignado y comentarios
const Prestador = require("../models/prestador"); // Importar modelo de Prestador para comentarios
// const Sede = require("../models/sede"); // ¡IMPORTACIÓN ELIMINADA!

const tipos = ['Reintegro', 'Autorizacion', 'Receta'];
const estados = ['Recibido', 'Observado', 'Aprobado', 'Rechazado', 'En Análisis'];

// Comentarios predefinidos para socios
const comentariosSocio = [
    "Necesito aclaración sobre los documentos requeridos",
    "¿Podrían revisar nuevamente mi solicitud? Creo que hay un error",
    "Adjunto documentación adicional que solicitan",
    "No entiendo por qué fue observada mi solicitud",
    "Ya presenté todos los documentos solicitados previamente",
    "¿Cuánto tiempo más demora la revisión?",
    "Quisiera saber el motivo específico de la observación",
    "He corregido los datos según me indicaron"
];

// Comentarios predefinidos para prestadores
const comentariosPrestador = [
    "Falta presentar comprobante de compra original",
    "Los montos no coinciden con la factura adjunta",
    "Solicitud requiere autorización previa del área médica",
    "Documentación incompleta - falta receta médica",
    "El prestador no está dentro de la cartilla autorizada",
    "Necesita presentar orden médica actualizada",
    "Los códigos de nomenclador no corresponden al tratamiento",
    "Requiere evaluación adicional del área de auditoría médica"
];

function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

async function seed() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true, useUnifiedTopology: true,
        });

        console.log("✅ Conectado a Mongo para seed de solicitudes");

        // Limpieza inicial
        await Solicitud.deleteMany({});
        console.log("🧹 Colección de solicitudes limpia");

        // --- PASO 1: OBTENER DATOS DE REFERENCIA ---

        // Obtener socios
        const socios = await Socio.find({}).lean();

        if (!socios.length){
            console.log("⚠️ No hay socios en la base de datos. Finalizando seed.");
            process.exit(0);
        }

        // Obtener prestadores para comentarios
        const prestadores = await Prestador.find({}).lean();

        console.log(`📊 Encontrados ${socios.length} socios y ${prestadores.length} prestadores.`);

        // --- PASO 2: GENERAR SOLICITUDES CON COMENTARIOS PARA ESTADO OBSERVADO ---

        const docs = [];

        for (const s of socios) {
            const cantidad = Math.floor(Math.random() * 3) + 1; // 1 a 3 solicitudes por socio
            for (let i = 0; i < cantidad; i++) {

                const estado = randomFrom(estados);
                const fechaCreacion = new Date(Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 365));

                const solicitud = {
                    nro: `${s.dni}-${i + 1}`,
                    afiliadoNombre: `${s.nombres} ${s.apellidos}`,
                    afiliadoId: s._id,
                    tipo: randomFrom(tipos),
                    estado: estado,
                    fechaCreacion: fechaCreacion,
                };

                let prestadorAsignado = null;
                // Asignar prestador a todas las solicitudes que no estén en estado "Recibido"
                if (estado !== 'Recibido' && prestadores.length > 0) {
                    prestadorAsignado = randomFrom(prestadores)._id;
                    solicitud.prestadorAsignado = prestadorAsignado;
                }

                // Si el estado es "Observado", agregar comentarios
                if (estado === 'Observado') {
                    // Siempre agregar al menos un comentario del socio
                    solicitud.comentariosSocio = [{
                        comentario: randomFrom(comentariosSocio),
                        fecha: new Date(fechaCreacion.getTime() + Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 7)) // Hasta 7 días después
                    }];

                    // 60% de probabilidad de agregar comentario de prestador
                    if (Math.random() < 0.6) {
                        solicitud.comentariosPrestador = [{
                            comentario: randomFrom(comentariosPrestador),
                            fecha: new Date(fechaCreacion.getTime() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 3)), // Hasta 3 días antes (el motivo de la observación)
                            prestador: prestadorAsignado
                        }];
                    }

                    // 30% de probabilidad de tener múltiples comentarios del socio
                    if (Math.random() < 0.3) {
                        solicitud.comentariosSocio.push({
                            comentario: randomFrom(comentariosSocio),
                            fecha: new Date(fechaCreacion.getTime() + Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 14)) // Hasta 14 días después
                        });
                    }
                }

                docs.push(solicitud);
            }
        }

        // --- PASO 3: INSERCIÓN FINAL ---
        await Solicitud.insertMany(docs);
        console.log(`✅ Insertadas ${docs.length} solicitudes de ejemplo.`);

    } catch (err) {
        console.error("❌ Error en el seed de solicitudes:", err);
        process.exit(1);
    } finally {
            await mongoose.connection.close();
            console.log("🔌 Conexión a MongoDB cerrada");
            process.exit(0);
    }
}

seed();