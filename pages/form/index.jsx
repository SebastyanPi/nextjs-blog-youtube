import Layout from "../../components/Layout";
import Style from '../../styles/Form.module.css';
import Link from "next/link";

export default function form({data}) {
    return (
      <Layout   
        title="Form | Quienes somos!"
        description=" Somos la U."
        >

            <form className={Style.form}>
                <h2>Formulario de Registro</h2>
                <label className={Style.label} htmlFor="">
                    Nombre : 
                    <input type="text" />
                </label>
                <label className={Style.label} htmlFor="">
                    Apellido :
                    <input type="text" />
                </label>
            </form>

            <div>
                <h1>Lista de Blogs</h1>
                {
                    data.map((user) =>(
                        <div key={user.id}>
                            <Link href={`/form/${user.id}`}>
                                <div> {user.name} - <b> {user.username}</b> </div>
                            </Link>
                        </div>
                    ))
                }
            </div>

      </Layout>
    )
  }
  
export async function getStaticProps(){ //Rutas Estaticas
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        return {
            props:{
                data
            }
        }
    } catch (error) {
        console.log(error)
    }
}