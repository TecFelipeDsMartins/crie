import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Empresas Crie</title>
      </Head>
      <div className="bg-header-patern bg-no-repeat md:bg-fixed bg-top md:bg-center bg-cover md:h-auto h-40 md:w-full flex md:flex-row flex-col justify-center items-center md:mb-9 mb-36 " >
       <div className="w-1/2 h-40 md:h-96 md:mb-20">
       </div>
       <div className="md:w-1/2 flex flex-col justify-center items-center relative top-32 md:-top-8">
        <h1 className="text-xl text-gray-600 pb-3">Buscar empresa por categoria</h1>
        <select className="w-72 text-base" name="empresas" id="emp">
          <option value="limpeza" disabled>Escolha uma categoria</option>
          <option value="limpeza">Limpeza</option>
          <option value="saude">Saúde</option>
          <option value="comunicação">Comunicação</option>
          <option value="contabilidade">Financeiro</option>
        </select>
       </div> 
      </div>
      <div className="h-auto w-full flex flex-col justify-center items-center" >
        
        {/* todo make component */}
        <div className="flex flex-col md:flex-row justify-center items-center py-16 border-b md:w-5/6 ">
          <div className="px-6 md:w-2/6 flex flex-col md:justify-start justify-center items-center  ">
            <img className="w-64 h-64 mb-8 md:mb-0 rounded-lg shadow-xl " src="img/criefundo.png" alt="" />                        
          </div>
          <div className="w-4/6 h-auto text-center md:text-left ">
            <h2 className="text-4xl pb-2">Categoria</h2>
            <h3 className="text-xl text-gray-600 pb-5">nome da empresa</h3>
            <p className="pb-8 text-xl md:text-base ">Iure dolore consequatur pariatur rem tenetur aperiam, enim quos corporis eligendi hic ab temporibus. Optio tempora molestias ducimus incidunt nostrum id vero quae dolorem repudiandae tempore, nulla eius animi culpa rem sit laudantium assumenda pariatur mollitia provident accusamus, sapiente odit? Consequatur culpa quos voluptatem nihil inventore, ducimus dolorum ad aperiam distinctio labore explicabo voluptates libero et qui.</p>
            <a href="">
              <button className="border rounded-md w-44 h-10 md:w-28 md:h-8 text-xl md:text-base shadow hover:shadow-none bg-green-500 text-white">Detalhes</button>
            </a> 
          </div>
        </div>
        {/*  */}
    
      </div> 
    </>
  )
  
}
