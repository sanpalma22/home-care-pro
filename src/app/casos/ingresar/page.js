import styles from "../casos.module.css"

export default function IngresarCasos() {
    return (
      <main>
        <div className="mainContainer">
          <h1>Ingresar Casos</h1>
        <form>
          <div className={styles.formIngreso}>
            <div className={styles.ingreso}>
              <label htmlFor="nombreInput">Nombre:</label>
              <input type="text" placeholder="Nombre de la persona" />
            </div>

            <div className={styles.ingreso}>
              <label htmlFor="nombreInput">Localidad:</label>
              <input type="text" placeholder="Localidad" />
            </div>

            <div className={styles.ingreso}>
              <label htmlFor="nombreInput">DNI:</label>
              <input type="text" placeholder="DNI"/>
            </div>
            
            <div className={styles.ingreso}>
              <label htmlFor="nombreInput">Prestacion:</label>
              <input type="text" placeholder="Prestacion" />
            </div>

            <div className={styles.ingreso}>
              <label htmlFor="nombreInput">Telefono:</label>
              <input type="text" placeholder="Telefono"/>
            </div>

            <div className={styles.ingreso}>
              <label htmlFor="nombreInput">Diagnostico:</label>
              <input type="text" placeholder="Diagnostico" />
            </div>

            <div className={styles.ingreso} >
              <label htmlFor="nombreInput">Direccion:</label>
              <input type="text" placeholder="Direccion"/>
            </div>

            <div className={styles.ingreso}>
              <label htmlFor="nombreInput">Fecha de nacimiento:</label>
              <input type="text" placeholder="Fecha de nacimiento"/>
            </div>

            <div className={styles.ingresoMedio}>
              <label htmlFor="nombreInput">Cantidad de dias:</label>
              <input type="text" placeholder="Cantidad de dias"/>
            </div>

            <div className={styles.ingresoMedio}>
              <label htmlFor="nombreInput">Horas por dia:</label>
              <input type="text" placeholder="Horas por dia"/>
            </div>

            <button type="submit" className="btnIngresar">Ingresar</button>
          </div>
          </form>
        </div>
      </main>
    );
  }