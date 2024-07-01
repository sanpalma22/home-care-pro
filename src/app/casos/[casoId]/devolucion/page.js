export default function Devolucion(){
    const [devoluciones, setDevoluciones] = useState(['']);
    useEffect(() => {
        async function fetchDevoluciones() {
        try {
            const response = await fetch("http://localhost:5000/casos/5/devolucion");
            if (!response.ok) {
            throw new Error("Error al obtener los datos");
            }
            const data = await response.json();
            setDevoluciones(data);
        } catch (error) {
            console.error("Error al obtener los casos:", error);
        }
        }
    
        fetchDevoluciones();
    }, []);
return(
    <>
    {devoluciones.map((devolucion)=>(
    <p> {devolucion.Descripcion}</p>

    ))}
    </>
)
}