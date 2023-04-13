import Background from "../assets/images/jack.jpg"

function about() {
    return (

      <div 
    style={{backgroundImage:`url(${Background})`}} 
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
       <div className="flex place-items-center h-screen">
       <h3 className='p-4 flex flex-col bg-slate-900 bg-opacity-50 text text-emerald-400 rounded mb-70'>
        For all Whiskey enthusists here you can keep a collection on<br></br> your favorite whiskeys and the prices of them</h3>
       
        </div>
      
    </div>
      
    )
  }

  export default about