
// import { useState } from 'react'
// import NavItems from './components/NavItems'

// function App(){

//   const [activeTab, setActiveTab] = useState("Dashboard");
//   const menu = [
//     {
//       title: "Dashboard",
//       link: "/dashboard"
//     },
//     {
//       title: "Transfer",
//       link: "/transfer"
//     },
//     {
//       title: "Top-up",
//       link: "/topup"
//     },
//     {
//       title: "Sign-out",
//       link: "/signout"
//     }
//   ];

//   return (
//     <>
//     <nav className="flex items-center w-screen justify-between bg-white py-4 px-8">
//     <img src='/image.png'/>
//       <div className="flex gap-x-8">
//         <NavItems 
//         menu={menu} 
//         activeTab={activeTab} 
//         handleClick={setActiveTab}/>
//       </div>
//     </nav>

//     <div className="ml-auto px-8" > 
//       <h1><b> Good Morning, Chelsea! </b>
//       </h1>
//       <p className="text-black text-2x1 mt-3"> Check all your incoming and outgoing transaction here </p>
//     </div>
    
//     <div className='flex items-center gap-x-4 ml-auto'>
//       <span className='text-right'>
//       <p className='text-black font-bold'>Chelsea Immanuela</p>
//       <p className='text-black'> Personal Account</p>
//       </span>
//     </div>
//     <div className='rounded-full border-[6px] hover:border-[6px] hover:border-[#178F8D]'>
//       <img src={chelseaAva} alt= "chelseaAva" className='rounded-full'/>
//     </div>
//     </>
//     );
// }

// export default App

import Hero from "./components/Hero";

function App() {
  return (
    <main>
      <Hero />
    </main>
  );
}

export default App;
