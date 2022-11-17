import Layout from "../../components/Layout";
import Style from '../../styles/Form.module.css';


export default function user({user}) {
    return (
        <Layout   
        title="ID | Params!"
        description=" Somos la U."
        >
            <div>
                <h1>{user.name}</h1>
                <p>Usuario : {user.username}</p>
                <p>Telefono : {user.phone}</p>
                <p>Email : {user.email}</p>
            </div>
        
        </Layout>
    )
  }

export async function getStaticPaths(){ //Rutas Dinamicas
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json();
        const paths = data.map(({id}) => ({ params: {id:`${id}` }}))
        return {
            paths,
            fallback: false //Se genera de forma automotico cuando la solicitud es falsa
        }

    } catch (error) {
        console.log(error)
    }
} //COn esto creamos todos los archivos del 1 hasta el 100

export async function getStaticProps({params}){ //Rutas Estaticas -> Aqui hacemos la consulta
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id)
        const data = await res.json()
        return {
            props:{
                user: data
            }
        }
    } catch (error) {
        console.log(error)
    }
}