
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function blog() {
    return (
      <Layout
        title="About | Quienes somos!"
        description=" Somos la U."
      >
       
        <h1>Quienes somos</h1>
            <Image src="/img/fondo.jpg" width={600} height={600}></Image>
            <Link href="/">
                Volver al inicio
            </Link>
      </Layout>
    )
  }