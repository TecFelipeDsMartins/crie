import Head from 'next/head'
import Card from '../components/Card'
import Prismic from 'prismic-javascript'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home({cartao}) {
  const [category, setCategory] = useState('Todas')

  return (
    <>
      <Head>
        <title>Empresas Crie</title>
        <meta name="descriptiodescriptiondescriptiodescriptionndescriptiodescriptionnn" content="Este o Empresas Crie, um site catálogo de empreendedores cristãos. Aqui você encontrará muitos profissionais de diferentes áreas de atuação" />
      </Head>
      <header className="bg-header-patern bg-no-repeat md:bg-fixed bg-top md:bg-center bg-cover md:h-auto h-40 md:w-full flex md:flex-row flex-col justify-center items-center md:mb-9 mb-36 " >
       <div className="w-1/2 h-40 md:h-96 md:mb-20">
         <h1 className="text-transparent">Empresas crie</h1>
       </div>
       <div className="md:w-1/2 flex flex-col justify-center items-center relative top-32 md:-top-8">
        <h2 className="text-xl text-gray-600 pb-3">Buscar empresa por categoria</h2>
        <select className="w-72 text-base" name="empresas" id="emp"
          onChange={(e) => setCategory(e.target.value)}>
          <option selected value="Todas">Todas</option>
          <option value="saude">Saúde</option>
          <option value="consultoria">Consultoria</option>
          <option value="certificados">Certificados</option>
          <option value="locucao">Locução</option>
          <option value="comunicacao">Comunicação</option>
          <option value="producao de videos">Produção de videos</option>
          <option value="manutencao">Manutenção</option>
          <option value="salao de beleza">Salão de Beleza</option>
          <option value="Venda e Revenda de doces">Venda e Revenda de doces</option>
          <option value="Distribuidora de Balas e artigos para festas">Distribuidora de Balas e artigos para festas</option>
          <option value="Corte e Costura">Corte e Costura</option>
          <option value="Moda Feminina">Moda Feminina</option>
        </select>
       </div> 
      </header>
      <div className="h-auto w-full flex flex-col justify-center items-center" >
        {cartao.map(card => ( 
        card.data.category === category ?
        <Card 
          key={card.data.id}
          image={card.data.image.url}
          desc={card.data.desc}
          name={card.data.name}
          text={card.data.text}
          link={card.data.link}
        />
        : category === 'Todas' ?
        <Card 
          key={card.data.id}
          image={card.data.image.url}
          desc={card.data.desc}
          name={card.data.name}
          text={card.data.text}
          link={card.data.link}
        />
        : null
        ))}
      </div>
      <footer className="text-center p-3" >
          <cite>Desenvolvido por</cite>
          <br />
          <a className="text-blue-400"  href="https://fdsm.vercel.app/">FDSM WEB DEVELOPER</a>
      </footer> 
    </>
  )
}

export async function getServerSideProps({ res }){
  const client = Prismic.client('https://empresascrie.prismic.io/api/v2')
  const cartao = await client.query(Prismic.Predicates.at('document.type', 'cartao'))
  return {
    props:{
      cartao: cartao.results,
    },
  }
}