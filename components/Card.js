const Card = ({key, image, category, desc, name, text, link }) => {
  return ( 
    <div key={key} className="flex flex-col md:flex-row justify-center items-center py-16 border-b md:w-5/6 ">
      <div className="px-6 md:w-2/6 flex flex-col md:justify-start justify-center items-center  ">
        <img className="w-64 h-64 mb-8 md:mb-0 rounded-lg shadow-xl " src={image} alt="logo" />                        
      </div>
      <div className="w-4/6 h-auto text-center md:text-left ">
        <h2 className="text-4xl pb-2">{name}</h2>
        <h3 className="text-xl text-gray-600 pb-5">{desc}</h3>
        <p className="pb-8 text-xl md:text-base ">{text}</p>
        <a href={link} target="_blank">
          <button className="border rounded-md w-44 h-10 md:w-28 md:h-8 text-xl md:text-base shadow-2xl hover:shadow-none bg-green-500 text-white">Detalhes</button>
        </a> 
      </div>
    </div>
   );
}
 
export default Card;