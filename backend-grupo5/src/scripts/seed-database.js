const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Configurar dotenv
dotenv.config();

// Importar modelos
const SocioModel = require("../models/socio");
const HistoriaClinicaModel = require("../models/historiaClinica");
const PrestadorModel = require("../models/prestador");

// Datos proporcionados por el usuario
const sociosData = [
  {
    id: "1000034",
    nombres: "Claudia Verónica",
    apellidos: "Benítez Ramírez",
    rol: "Familiar",
    dni: "1000034",
    es_familiar_de: "1000035",
  },
  {
    id: "1000035",
    nombres: "Marcos Sin Notas Daniel",
    apellidos: "Silva",
    rol: "Titular",
    dni: "1000035",
  },
  {
    id: "1000036",
    nombres: "Florencia Isabel",
    apellidos: "Córdoba",
    rol: "Familiar",
    dni: "1000036",
    es_familiar_de: "1000035",
  },
  {
    id: "1000037",
    nombres: "Pablo Nicolás",
    apellidos: "Álvarez",
    rol: "Titular",
    dni: "1000037",

  },
  {
    id: "1000038",
    nombres: "Tamara Julieta",
    apellidos: "Ríos Gutiérrez",
    rol: "Familiar",
    dni: "1000038",
    es_familiar_de: "1000037",
  },
  {
    id: "1000039",
    nombres: "Federico Andrés",
    apellidos: "Molina",
    rol: "Titular",
    dni: "1000039",
  },
  {
    id: "1000040",
    nombres: "Rocío Belén",
    apellidos: "Serrano Díaz",
    rol: "Familiar",
    dni: "1000040",
    es_familiar_de: "1000039",
  },
  {
    id: "1000041",
    nombres: "Mauricio Gabriel",
    apellidos: "Giménez",
    rol: "Titular",
    dni: "1000041",
  },
  {
    id: "1000042",
    nombres: "Natalia Soledad",
    apellidos: "Luna Fernández",
    rol: "Familiar",
    dni: "1000042",
    es_familiar_de: "1000041",
  },
  {
    id: "1000043",
    nombres: "Oscar Javier",
    apellidos: "Ponce",
    rol: "Titular",
    dni: "1000043",
  },
  {
    id: "1000044",
    nombres: "Marta Alejandra",
    apellidos: "Acuña Ramírez",
    rol: "Familiar",
    dni: "1000044",
    es_familiar_de: "1000043",
  },
  {
    id: "1000045",
    nombres: "Tomás Emiliano",
    apellidos: "Romero",
    rol: "Titular",
    dni: "1000045",
  },
  {
    id: "1000046",
    nombres: "Camila Eugenia",
    apellidos: "Ortiz Cabrera",
    rol: "Familiar",
    dni: "1000046",
    es_familiar_de: "1000045",
  },
  {
    id: "1000047",
    nombres: "Gonzalo Adrián",
    apellidos: "Peralta",
    rol: "Titular",
    dni: "1000047",
  },
  {
    id: "1000048",
    nombres: "Julieta Vanesa",
    apellidos: "Márquez",
    rol: "Familiar",
    dni: "1000048",
    es_familiar_de: "1000047",
  },
  {
    id: "1000049",
    nombres: "Sergio Esteban",
    apellidos: "Aguilar Ruiz",
    rol: "Titular",
    dni: "1000049",
  },
  {
    id: "1000050",
    nombres: "Paula Antonella",
    apellidos: "Campos",
    rol: "Familiar",
    dni: "1000050",
    es_familiar_de: "1000051",
  },
  {
    id: "1000051",
    nombres: "Rodrigo Javier",
    apellidos: "Espinoza Torres",
    rol: "Titular",
    dni: "1000051",
  },
  {
    id: "1000052",
    nombres: "Mariana Daniela",
    apellidos: "Quiroga",
    rol: "Familiar",
    dni: "1000052",
    es_familiar_de: "1000053",
  },
  {
    id: "1000053",
    nombres: "Alejandro Luis",
    apellidos: "Godoy Ramírez",
    rol: "Titular",
    dni: "1000053",
  },
  {
    id: "1000054",
    nombres: "Lorena Gabriela",
    apellidos: "Mendoza",
    rol: "Familiar",
    dni: "1000054",
    es_familiar_de: "1000053",
  },
  {
    id: "1000059",
    nombres: "Maximiliano José",
    apellidos: "Paredes Martínez",
    rol: "Titular",
    dni: "1000059",
  },
  {
    id: "1000060",
    nombres: "Eliana Verónica",
    apellidos: "Campos Suárez",
    rol: "Familiar",
    dni: "1000060",
    es_familiar_de: "1000059",
  },
];

// Arrays para generar datos aleatorios
const ciudades = [
  "Buenos Aires",
  "Córdoba",
  "Rosario",
  "Mendoza",
  "La Plata",
  "Tucumán",
  "Mar del Plata",
  "Salta",
  "Santa Fe",
  "San Juan",
];

const provincias = [
  "Buenos Aires",
  "Córdoba",
  "Santa Fe",
  "Mendoza",
  "Tucumán",
  "Salta",
  "Entre Ríos",
  "Misiones",
  "Chaco",
  "San Juan",
];

const calles = [
  "Av. Corrientes",
  "San Martín",
  "Belgrano",
  "Rivadavia",
  "Mitre",
  "Sarmiento",
  "Alsina",
  "Moreno",
  "Urquiza",
  "Av. 9 de Julio",
];

// Datos médicos para historia clínica
const patologiasComunes = [
  "Hipertensión arterial",
  "Diabetes mellitus tipo 2",
  "Asma bronquial",
  "Artritis reumatoidea",
  "Gastritis crónica",
  "Migraña",
  "Osteoporosis",
  "Hipotiroidismo",
  "Colesterol alto",
  "Ansiedad generalizada",
  "Lumbalgia crónica",
  "Sinusitis crónica",
  "Dermatitis atópica",
  "Reflujo gastroesofágico",
  "Fibromialgia",
];

const parentescos = [
  "Padre",
  "Madre",
  "Hermano/a",
  "Abuelo/a paterno/a",
  "Abuelo/a materno/a",
  "Tío/a",
  "Primo/a",
];

const cirugias = [
  "Apendicectomía",
  "Colecistectomía",
  "Herniorrafia inguinal",
  "Cesárea",
  "Artroscopia de rodilla",
  "Extracción de cataratas",
  "Amigdalectomía",
  "Cirugía de vesícula",
];

const alergenos = [
  { tipo: "Medicamento", sustancia: "Penicilina", reaccion: "Rash cutáneo", gravedad: "Moderada" },
  { tipo: "Medicamento", sustancia: "Aspirina", reaccion: "Broncoespasmo", gravedad: "Grave" },
  { tipo: "Alimento", sustancia: "Mariscos", reaccion: "Urticaria", gravedad: "Leve" },
  { tipo: "Alimento", sustancia: "Frutos secos", reaccion: "Anafilaxia", gravedad: "Mortal" },
  { tipo: "Ambiental", sustancia: "Polen", reaccion: "Rinitis", gravedad: "Leve" },
  { tipo: "Ambiental", sustancia: "Ácaros", reaccion: "Asma", gravedad: "Moderada" },
];

const medicamentos = [
  { nombre: "Enalapril", dosis: "10mg", frecuencia: "2 veces al día", via: "Oral" },
  { nombre: "Metformina", dosis: "850mg", frecuencia: "2 veces al día", via: "Oral" },
  { nombre: "Omeprazol", dosis: "20mg", frecuencia: "1 vez al día", via: "Oral" },
  { nombre: "Atorvastatina", dosis: "20mg", frecuencia: "1 vez al día", via: "Oral" },
  { nombre: "Salbutamol", dosis: "100mcg", frecuencia: "Según necesidad", via: "Inhalatoria" },
  { nombre: "Losartán", dosis: "50mg", frecuencia: "1 vez al día", via: "Oral" },
];

const vacunas = [
  "COVID-19 (Pfizer)",
  "Gripe estacional",
  "Neumococo",
  "Hepatitis B",
  "Tétanos-Difteria",
  "Fiebre Amarilla",
];

const gruposSanguineos = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const obrasSociales = [
  { nombre: "OSDE", plan: "210" },
  { nombre: "Swiss Medical", plan: "SMG01" },
  { nombre: "Galeno", plan: "Plan Azul" },
  { nombre: "PAMI", plan: "Básico" },
  { nombre: "IOMA", plan: "Titular" },
  { nombre: "OSECAC", plan: "Plan A" },
];

const estudiosComplementarios = [
  { tipo: "Laboratorio", nombre: "Hemograma completo" },
  { tipo: "Laboratorio", nombre: "Glucemia basal" },
  { tipo: "Laboratorio", nombre: "Perfil lipídico" },
  { tipo: "Radiografía", nombre: "Tórax frente y perfil" },
  { tipo: "Ecografía", nombre: "Abdominal completa" },
  { tipo: "Electrocardiograma", nombre: "ECG de 12 derivaciones" },
];

// Nombres femeninos típicos para determinar género
const nombresFemeninos = [
  "Sol",
  "Magalí",
  "Laura",
  "Ana",
  "María",
  "Valeria",
  "Cecilia",
  "Lucía",
  "Patricia",
  "Marcela",
  "Verónica",
  "Silvia",
  "Daniela",
  "Juliana",
  "Mónica",
  "Adriana",
  "Claudia",
  "Florencia",
  "Tamara",
  "Rocío",
  "Natalia",
  "Marta",
  "Camila",
  "Julieta",
  "Paula",
  "Mariana",
  "Lorena",
  "Carolina",
  "Agustina",
  "Eliana",
];

// Funciones de generación

function determinarGenero(nombres) {
  const primerNombre = nombres.split(" ")[0];
  return nombresFemeninos.includes(primerNombre) ? "Femenino" : "Masculino";
}

function generarFechaNacimiento() {
  const year = Math.floor(Math.random() * (2005 - 1950) + 1950);
  const month = Math.floor(Math.random() * 12);
  const day = Math.floor(Math.random() * 28) + 1;
  return new Date(year, month, day);
}

function generarTelefono() {
  const codigo = Math.floor(Math.random() * 900) + 100;
  const numero = Math.floor(Math.random() * 9000000) + 1000000;
  return `+54 ${codigo} ${numero}`;
}

function generarEmail(nombres, apellidos, nroAfiliado) {
  const nombre = nombres.split(" ")[0].toLowerCase();
  const apellido = apellidos.split(" ")[0].toLowerCase();
  const dominios = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
  const dominio = dominios[Math.floor(Math.random() * dominios.length)];
  return `${nombre}.${apellido}.${nroAfiliado}@${dominio}`;
}

function generarDireccion() {
  const calle = calles[Math.floor(Math.random() * calles.length)];
  const numero = Math.floor(Math.random() * 9999) + 1;
  return `${calle} ${numero}`;
}

function generarFechaAleatoria(añosAtras = 5) {
  const ahora = new Date();
  const fechaMinima = new Date();
  fechaMinima.setFullYear(ahora.getFullYear() - añosAtras);
  return new Date(
    fechaMinima.getTime() + Math.random() * (ahora.getTime() - fechaMinima.getTime())
  );
}

function generarNumeroHistoria(nroAfiliado) {
  const año = new Date().getFullYear();
  return `HC-${año}-${nroAfiliado}`;
}

// Funciones para generar datos de historia clínica
function generarAntecedentesPatologicos() {
  const antecedentes = [];
  const cantidad = Math.floor(Math.random() * 3); // 0-2 antecedentes

  for (let i = 0; i < cantidad; i++) {
    const patologia = patologiasComunes[Math.floor(Math.random() * patologiasComunes.length)];
    antecedentes.push({
      patologia: patologia,
      año_diagnostico: 2024 - Math.floor(Math.random() * 20), // Últimos 20 años
      estado: ["Activo", "Controlado", "En tratamiento"][Math.floor(Math.random() * 3)],
      observaciones: `Paciente refiere antecedentes de ${patologia.toLowerCase()}`,
    });
  }
  return antecedentes;
}

function generarAntecedentesFamiliares() {
  const antecedentes = [];
  const cantidad = Math.floor(Math.random() * 4); // 0-3 antecedentes

  for (let i = 0; i < cantidad; i++) {
    antecedentes.push({
      parentesco: parentescos[Math.floor(Math.random() * parentescos.length)],
      patologia: patologiasComunes[Math.floor(Math.random() * patologiasComunes.length)],
      edad_diagnostico: Math.floor(Math.random() * 40) + 30, // Entre 30-70 años
      observaciones: "Antecedente familiar relevante",
    });
  }
  return antecedentes;
}

function generarAntecedentesQuirurgicos() {
  if (Math.random() < 0.7) return []; // 70% sin cirugías

  const cantidad = Math.floor(Math.random() * 2) + 1; // 1-2 cirugías
  const antecedentes = [];

  for (let i = 0; i < cantidad; i++) {
    antecedentes.push({
      cirugia: cirugias[Math.floor(Math.random() * cirugias.length)],
      fecha: generarFechaAleatoria(10),
      hospital: "Hospital Regional",
      cirujano: "Dr. " + ["García", "López", "Martínez"][Math.floor(Math.random() * 3)],
      complicaciones: Math.random() < 0.1 ? "Infección menor" : "Sin complicaciones",
      observaciones: "Cirugía realizada sin incidentes",
    });
  }
  return antecedentes;
}

function generarAlergias() {
  if (Math.random() < 0.8) return []; // 80% sin alergias conocidas

  const cantidad = Math.floor(Math.random() * 2) + 1; // 1-2 alergias
  const alergias = [];

  for (let i = 0; i < cantidad; i++) {
    const alergia = alergenos[Math.floor(Math.random() * alergenos.length)];
    alergias.push({
      tipo: alergia.tipo,
      sustancia: alergia.sustancia,
      reaccion: alergia.reaccion,
      gravedad: alergia.gravedad,
      fecha_deteccion: generarFechaAleatoria(15),
    });
  }
  return alergias;
}

function generarMedicacionHabitual() {
  const medicacion = [];
  const cantidad = Math.floor(Math.random() * 3); // 0-2 medicamentos

  for (let i = 0; i < cantidad; i++) {
    const med = medicamentos[Math.floor(Math.random() * medicamentos.length)];
    medicacion.push({
      medicamento: med.nombre,
      dosis: med.dosis,
      frecuencia: med.frecuencia,
      via_administracion: med.via,
      fecha_inicio: generarFechaAleatoria(2),
      medico_prescriptor: "Dr. " + ["García", "López", "Martínez"][Math.floor(Math.random() * 3)],
      indicacion: "Tratamiento crónico",
      activo: true,
    });
  }
  return medicacion;
}

function generarHabitos(genero) {
  return {
    tabaquismo: {
      fuma: Math.random() < 0.25, // 25% fuma
      cigarrillos_por_dia: Math.random() < 0.25 ? Math.floor(Math.random() * 20) + 5 : undefined,
      años_fumando: Math.random() < 0.25 ? Math.floor(Math.random() * 20) + 5 : undefined,
      fecha_cese: Math.random() < 0.1 ? generarFechaAleatoria(5) : undefined,
      observaciones: Math.random() < 0.25 ? "Intenta dejar de fumar" : undefined,
    },
    alcoholismo: {
      consume: Math.random() < 0.4, // 40% consume alcohol
      frecuencia:
        Math.random() < 0.4 ? ["Ocasional", "Semanal"][Math.floor(Math.random() * 2)] : undefined,
      tipo_bebida: Math.random() < 0.4 ? "Vino" : undefined,
      cantidad_semanal: Math.random() < 0.4 ? Math.floor(Math.random() * 7) + 1 : undefined,
    },
    drogas: {
      consume: false, // Por simplicidad, ningún consumo
      tipo_droga: undefined,
      frecuencia: undefined,
    },
    ejercicio: {
      practica: Math.random() < 0.6, // 60% hace ejercicio
      tipo_ejercicio:
        Math.random() < 0.6
          ? ["Caminata", "Natación", "Gimnasio"][Math.floor(Math.random() * 3)]
          : undefined,
      frecuencia_semanal: Math.random() < 0.6 ? Math.floor(Math.random() * 5) + 1 : undefined,
      intensidad:
        Math.random() < 0.6 ? ["Leve", "Moderada"][Math.floor(Math.random() * 2)] : undefined,
    },
    alimentacion: {
      tipo_dieta: ["Omnívora", "Vegetariana"][Math.floor(Math.random() * 2)],
      observaciones: Math.random() < 0.3 ? "Intenta comer saludable" : undefined,
    },
  };
}

function generarSignosVitales() {
  return {
    presion_sistolica: Math.floor(Math.random() * 60) + 100, // 100-160
    presion_diastolica: Math.floor(Math.random() * 40) + 60, // 60-100
    frecuencia_cardiaca: Math.floor(Math.random() * 40) + 60, // 60-100
    temperatura: Math.round((Math.random() * 2 + 36) * 10) / 10, // 36.0-38.0
    frecuencia_respiratoria: Math.floor(Math.random() * 8) + 12, // 12-20
    saturacion_oxigeno: Math.floor(Math.random() * 5) + 96, // 96-100
    fecha_medicion: generarFechaAleatoria(0.5),
  };
}

function generarAntropometria(genero) {
  const altura = Math.floor(Math.random() * 40) + (genero === "Femenino" ? 150 : 160); // cm
  const peso = Math.floor(Math.random() * 40) + (genero === "Femenino" ? 50 : 60); // kg

  return {
    peso: peso,
    altura: altura,
    // IMC se calcula automáticamente en el middleware
    perimetro_cintura: Math.floor(Math.random() * 40) + 70,
    perimetro_cadera: Math.floor(Math.random() * 30) + 90,
    fecha_medicion: generarFechaAleatoria(0.5),
  };
}

function generarVacunas() {
  const vacunasGeneradas = [];
  const cantidad = Math.floor(Math.random() * 3) + 1; // 1-3 vacunas

  for (let i = 0; i < cantidad; i++) {
    vacunasGeneradas.push({
      nombre_vacuna: vacunas[Math.floor(Math.random() * vacunas.length)],
      fecha_aplicacion: generarFechaAleatoria(2),
      dosis: ["1ra dosis", "2da dosis", "Refuerzo"][Math.floor(Math.random() * 3)],
      lote: `L${Math.floor(Math.random() * 10000)}`,
      centro_vacunacion: "Centro de Salud Municipal",
      observaciones: "Vacuna aplicada sin complicaciones",
    });
  }
  return vacunasGeneradas;
}

function generarContactoEmergencia() {
  const nombres = ["María García", "Juan Pérez", "Ana López", "Carlos Martínez"];
  const parentescos = ["Esposo/a", "Hijo/a", "Madre", "Padre", "Hermano/a"];

  return {
    nombre: nombres[Math.floor(Math.random() * nombres.length)],
    parentesco: parentescos[Math.floor(Math.random() * parentescos.length)],
    telefono: generarTelefono(),
    direccion: generarDireccion(),
  };
}

function generarGinecoObstetrica(genero) {
  if (genero !== "Femenino") return { aplica: false };

  const edad = Math.floor(Math.random() * 50) + 20;
  const gestaciones = edad > 25 ? Math.floor(Math.random() * 4) : 0;

  return {
    aplica: true,
    menarca: Math.floor(Math.random() * 5) + 11, // 11-15 años
    menopausia:
      edad > 45
        ? {
            fecha: generarFechaAleatoria(10),
            natural: true,
          }
        : undefined,
    gestaciones: gestaciones,
    partos: Math.floor(gestaciones * 0.8),
    cesareas: Math.floor(gestaciones * 0.2),
    abortos: Math.floor(gestaciones * 0.1),
    fecha_ultima_regla: edad < 50 ? generarFechaAleatoria(0.1) : undefined,
    metodo_anticonceptivo: edad < 45 ? "Anticonceptivos orales" : undefined,
    fecha_ultimo_papanicolau: generarFechaAleatoria(1),
    fecha_ultima_mamografia: edad > 40 ? generarFechaAleatoria(2) : undefined,
  };
}

function generarEstudiosRecientes() {
  const estudios = [];
  const cantidad = Math.floor(Math.random() * 3) + 1; // 1-3 estudios

  for (let i = 0; i < cantidad; i++) {
    const estudio =
      estudiosComplementarios[Math.floor(Math.random() * estudiosComplementarios.length)];
    estudios.push({
      tipo_estudio: estudio.tipo,
      nombre_estudio: estudio.nombre,
      fecha_realizacion: generarFechaAleatoria(1),
      resultado_resumen: "Valores dentro de parámetros normales",
      medico_solicitante: "Dr. " + ["García", "López", "Martínez"][Math.floor(Math.random() * 3)],
      centro_realizacion: "Laboratorio Central",
    });
  }
  return estudios;
}

function generarDiagnosticosActuales() {
  const diagnosticos = [];
  const cantidad = Math.floor(Math.random() * 2) + 1; // 1-2 diagnósticos

  for (let i = 0; i < cantidad; i++) {
    const patologia = patologiasComunes[Math.floor(Math.random() * patologiasComunes.length)];
    diagnosticos.push({
      codigo_cie10: `I${Math.floor(Math.random() * 99)}.${Math.floor(Math.random() * 9)}`,
      descripcion: patologia,
      tipo: i === 0 ? "Principal" : "Secundario",
      fecha_diagnostico: generarFechaAleatoria(2),
      medico_diagnosticador:
        "Dr. " + ["García", "López", "Martínez"][Math.floor(Math.random() * 3)],
      estado: ["Activo", "Controlado", "En seguimiento"][Math.floor(Math.random() * 3)],
    });
  }
  return diagnosticos;
}

// Función principal para poblar la base de datos
async function poblarBaseDeDatos() {
  try {
    // Conectar a MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Conectado a MongoDB");

    // Obtener prestadores existentes
    const prestadores = await PrestadorModel.find({});
    console.log(`👨‍⚕️ Prestadores encontrados: ${prestadores.length}`);

    // Limpiar colecciones existentes
    console.log("🧹 Limpiando colecciones existentes...");
    await SocioModel.deleteMany({});
    await HistoriaClinicaModel.deleteMany({});

    console.log("🏥 Creando socios e historias clínicas expandidas...");

    for (const socioData of sociosData) {
      // Generar datos adicionales para el socio
      const genero = determinarGenero(socioData.nombres);
      const fechaNacimiento = generarFechaNacimiento();

      const socioCompleto = {
        nombres: socioData.nombres,
        apellidos: socioData.apellidos,
        dni: socioData.dni,
        rol: socioData.rol,
        genero: genero,
        fecha_nacimiento: fechaNacimiento,
        telefono: generarTelefono(),
        email: generarEmail(socioData.nombres, socioData.apellidos, socioData.dni),
        direccion: generarDireccion(),
        ciudad: ciudades[Math.floor(Math.random() * ciudades.length)],
        provincia: provincias[Math.floor(Math.random() * provincias.length)],
        estado: "Activo",
      };

      // Crear el socio
      const socio = await SocioModel.create(socioCompleto);

      // Seleccionar médico de cabecera aleatorio si hay prestadores
      const medicoCabecera =
        prestadores.length > 0 ? prestadores[Math.floor(Math.random() * prestadores.length)] : null;

      // Seleccionar obra social
      const obraSocial = obrasSociales[Math.floor(Math.random() * obrasSociales.length)];

      // Crear historia clínica completa
      const historiaClinicaCompleta = {
        socio: socio._id,
        medico_cabecera: medicoCabecera ? medicoCabecera._id : null,
        numero_historia: generarNumeroHistoria(socio.dni),

        // Generar todos los campos del modelo expandido
        antecedentes_patologicos: generarAntecedentesPatologicos(),
        antecedentes_familiares: generarAntecedentesFamiliares(),
        antecedentes_quirurgicos: generarAntecedentesQuirurgicos(),
        alergias: generarAlergias(),
        medicacion_habitual: generarMedicacionHabitual(),
        habitos: generarHabitos(genero),
        signos_vitales: generarSignosVitales(),
        antropometria: generarAntropometria(genero),
        vacunas: generarVacunas(),
        grupo_sanguineo: {
          tipo: gruposSanguineos[Math.floor(Math.random() * gruposSanguineos.length)],
          fecha_determinacion: generarFechaAleatoria(5),
        },
        contacto_emergencia: generarContactoEmergencia(),
        gineco_obstetrica: generarGinecoObstetrica(genero),
        estudios_recientes: generarEstudiosRecientes(),
        diagnosticos_actuales: generarDiagnosticosActuales(),
        obra_social: {
          nombre: obraSocial.nombre,
          dni: socio.dni,
          plan: obraSocial.plan,
          vigencia: new Date(2025, 11, 31), // Vigente hasta fin de 2025
        },
        observaciones_generales: "Historia clínica generada automáticamente para testing",
        estado: "Activa",
        ultima_consulta: generarFechaAleatoria(1),
        proxima_cita:
          Math.random() < 0.5
            ? new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000)
            : null,
      };

      const historiaClinica = await HistoriaClinicaModel.create(historiaClinicaCompleta);

      // Actualizar el socio con la referencia a la historia clínica
      await SocioModel.findByIdAndUpdate(socio._id, {
        historia_clinica: historiaClinica._id,
      });

      const medicoCabeceraInfo = medicoCabecera
        ? `Dr. ${medicoCabecera.nombres} ${medicoCabecera.apellidos}`
        : "Sin médico asignado";

      console.log(
        `✅ ${socio.nombres} ${socio.apellidos} - HC: ${historiaClinica.numero_historia} - Médico: ${medicoCabeceraInfo}`
      );
    }

    // Asignar un titular aleatorio a cada familiar
    const titulares = await SocioModel.find({ rol: "Titular" }).select("_id nombres apellidos dni");
    const familiares = await SocioModel.find({ rol: "Familiar" }).select("_id nombres apellidos dni");
    if (titulares.length === 0) {
      console.log("⚠️ No hay titulares para vincular con familiares.");
    } else {
      for (const familiar of familiares) {
        const titularAleatorio = titulares[Math.floor(Math.random() * titulares.length)];
        await SocioModel.findByIdAndUpdate(familiar._id, { es_familiar_de: titularAleatorio._id });
        console.log(
          `👪 Vinculado ${familiar.nombres} ${familiar.apellidos} con titular ${titularAleatorio.nombres} ${titularAleatorio.apellidos}`
        );
      }
    }

    console.log(`\n🎉 ¡Proceso completado exitosamente!`);
    console.log(
      `📊 Se crearon ${sociosData.length} socios y ${sociosData.length} historias clínicas completas.`
    );
    console.log(`🏥 Cada historia clínica incluye:`);
    console.log(`   • Antecedentes médicos y familiares`);
    console.log(`   • Alergias y medicación habitual`);
    console.log(`   • Hábitos y signos vitales`);
    console.log(`   • Datos antropométricos (IMC automático)`);
    console.log(`   • Vacunas y grupo sanguíneo`);
    console.log(`   • Estudios complementarios`);
    console.log(`   • Diagnósticos actuales`);
    console.log(`   • Información gineco-obstétrica (cuando aplique)`);
  } catch (error) {
    console.error("❌ Error al poblar la base de datos:", error);
  } finally {
    // Cerrar la conexión
    await mongoose.connection.close();
    console.log("🔌 Conexión a MongoDB cerrada");
    process.exit(0);
  }
}

// Ejecutar el script
console.log("🚀 Iniciando creación de socios e historias clínicas expandidas...");
poblarBaseDeDatos();