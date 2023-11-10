import React from 'react'

const Navbar = () => {
  return (
   <header className="text-gray-600 bg-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 py-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src='/logo.png' className="w-24" />
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900 hover:scale-110 cursor-pointer" href='/#service'>Domicílio</a>
      <a className="mr-5 hover:text-gray-900 hover:scale-110 cursor-pointer" href='/#engomadoria'>Engomadoria/Limpeza a Seco</a>
      <a className="mr-5 hover:text-gray-900 hover:scale-110 cursor-pointer" href='/#limpeza'>Limpeza de Tapetes</a>
      <a className="mr-5 hover:text-gray-900 hover:scale-110 cursor-pointer" href='/#faqs'>FAQs</a>
    </nav>
    <a href='/#contact' className="inline-flex items-center text-white bg-[#01AEF0] border-0 py-2 px-3 focus:outline-none hover:bg-[#0383b6] hover:scale-110 transition-all rounded text-base mt-4 md:mt-0">Contact us
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</header>

  )
}

export default Navbar