import Head from 'next/head'
import Card from '../components/Card'
import Prismic from 'prismic-javascript'
import styles from '../styles/Home.module.css'

export default function Home({cartao}) {
  return (
    <>
      <Head>
        <title>Empresas Crie</title>
      </Head>
      <header className="bg-header-patern bg-no-repeat md:bg-fixed bg-top md:bg-center bg-cover md:h-auto h-40 md:w-full flex md:flex-row flex-col justify-center items-center md:mb-9 mb-36 " >
       <div className="w-1/2 h-40 md:h-96 md:mb-20">
       </div>
       <div className="md:w-1/2 flex flex-col justify-center items-center relative top-32 md:-top-8">
        <h1 className="text-xl text-gray-600 pb-3">Buscar empresa por categoria</h1>
        <select className="w-72 text-base" name="empresas" id="emp">
          <option value="Todas">Todas</option>
          <option value="limpeza">Limpeza</option>
          <option value="saude">Saúde</option>
          <option value="comunicação">Comunicação</option>
          <option value="contabilidade">Financeiro</option>
        </select>
       </div> 
      </header>
      <div className="h-auto w-full flex flex-col justify-center items-center" >
        {cartao.map(card => (
        <Card 
          key={card.data.id}
          image={card.data.image.url}
          category={card.data.category}
          name={card.data.name}
          text={card.data.text}
          link={card.data.link}
        />
        ))}
      </div> 
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