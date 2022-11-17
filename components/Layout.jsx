import Head from "next/head";
import Image from "next/image";
import styles from '../styles/Layout.module.css';

export default function Layout({children, title, description, home}) {
  return (
    <div className={styles.container}>
         <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>

        { home ? (
          <>
              <Image src="img/fondo.jpg">

              </Image>

          </>
          
          ) : (
            <>
              
            
            </>
          )

          }
        <header className="">

        </header>

        <nav>
            
        </nav>

        <main>
            {children}
        </main>

        <footer>
            
        </footer>
    </div>
  )
}

Layout.defaultProps = {
  title: "Next JS | mi sitio web",
  description : "Descripcion de mi sitio web",
};