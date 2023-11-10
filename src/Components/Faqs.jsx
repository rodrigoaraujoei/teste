"use client"
import React from 'react'

const Input = ()=>{
  return <>
    <p>hello</p>
  </>
}

const faq = [
    {
        id:1,
        Question:'How i can play for my appoinment ?',
        Ans:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?',
        active:true
    },
    {
        id:2,
        Question:'How i can play for my appoinment ?',
        Ans:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?',
        active:false
    },
    {
        id:3,
        Question:'Quanto tempo demora o serviço?',
        Ans:"<ol style='list-style-type:circle'>Serviço Base = 2 dias úteis.<br/>Serviço Full / Engomadoria = 2 / 3 dias úteis.<br/>Limpeza a Seco / Tapetes = 5 dias úteis.</ol><br/><br/>(Caso seja necessário repetições, poderá demorar mais tempo)",
        active:false
    }
]

const Faqs = () => {
    const [items,setItems] = React.useState(faq)

    const Toggle = (id)=>{
        setItems((item)=>item.map((i)=>(
            i.id==id ? {...i, active:!i.active} : i
        )))
    }

  return (
   <section id='faqs' className="bg-white bg-cover bg-no-repeat bg-center bg-fixed"  style={{backgroundImage:'url(/faqs.jpg)'}}>
  <div className="container max-w-4xl px-6 py-10 mx-auto backdrop-blur-sm">
    <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl ">Frequently asked questions</h1>
    <div className="mt-12 space-y-8">
    {items.map((item)=>{
      return (
      <div className="border-2 bg-white border-gray-100 rounded-lg ">
        <button onClick={()=>Toggle(item.id)} className="flex items-center justify-between w-full p-8">
          <h1 className="font-semibold text-gray-700 ">{item.Question}</h1>
          {item.active ? (
          <span className="text-gray-400 bg-gray-200 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
            </svg>
          </span>
          ):(

          <span class="text-white bg-[#01AEF0] rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>
          )}
          {/* <span className="text-gray-400 bg-gray-200 rounded-full">
          
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
            </svg>
          </span> */}
        </button>
        {item.active && 
        <>
         <hr className="border-gray-200 " />
        <p dangerouslySetInnerHTML={{ __html: item.Ans }} className="p-8 text-sm text-gray-500 ">
          {/* {item.Ans} */}
        </p>
        </>
        }
      </div>
    )})}
      
    </div>
  </div>
</section>

  )
}

export default Faqs