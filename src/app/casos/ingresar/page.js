export default function IngresarCasos() {
    return (
      <main>
        <div>
          <h1>Ingresar Casos</h1>
        <form>
            <label htmlFor="nombreInput">Nombre:</label>
            <input type="text" placeholder="Nombre de la persona" />
            <input type="submit" value="Ingresar"/>
          </form>
        </div>
      </main>
    );
  }