const express = require("express");
const cors = require("cors");
const sql = require("mssql");
const app = express();
app.use(cors());
app.use(express.json());

// Configuración de la conexión a la base de datos MSSQL
const config = {
  server: "A-PHZ2-CIDI-26", // Puede ser localhost si está en el mismo servidor que el backend
  database: "HomeCareProBD",
  user: "alumno",
  password: "alumno",
  options: {
    encrypt: false,
    trustServerCertificate: true,
    enableArithAbort: true, // Para evitar problemas de aritmética
  }
};

const getConnection = async () => {
  try {
    const pool = await sql.connect(config);

    const result= await pool.request().query("SELECT * FROM Especialidad")
    console.log(result)

    return pool;
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error.message, error.code);

  }
};
getConnection()

// Ruta para obtener los casos activos desde la base de datos
app.get("/api/casos", async (req, res) => {
  try {
    const pool = await getConnection();
    if (pool) {
      const result = await pool.request().query("SELECT * FROM Especialidad");
      console.log(result);
      res.json(result.recordset);
    } else {
      res.status(500).json({ message: "No se pudo establecer conexión con la base de datos" });
    }
  } catch (error) {
    console.error("Error al obtener los casos activos:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

// async function testConnection() {
//   try {
//     const pool = await mssql.connect(config);
//     console.log('Conexión exitosa');
//     pool.close();
//   } catch (error) {
//     console.error('Error al conectar con la base de datos:', error.message, error.code);
//   }
// }

// testConnection();

// Puerto en el que escucha el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend iniciado en el puerto ${PORT}`);
  getConnection(); // Llamada a la función para establecer la conexión
});