import { AiFillOpenAI } from "react-icons/ai";
import Link from "next/link";


export default function Header(){
    return(
        <nav className=" bg-gray-800 text-white h-20 p-4 items-center pl-10 flex gap-10 text-1xl ">
     <AiFillOpenAI style={{
        fontSize: 40,
       color: 'white',
       margin: '0 10px',
       padding: '0',

     }} />  
       
 <p className="text-yellow-50  font-extrabold text-2xl mr-auto">Ai Academy</p>
 <ul className='flex gap-8 justify items-between mr-auto ml-5 font-bold '>
       <li className="hover:text-blue-400 text-2xl"><Link href="/">Home</Link></li>
       <li className="hover:text-blue-400 text-2xl"><Link href="/about">About</Link></li>
       <li className="hover:text-blue-400 text-2xl"><Link href="/courses">Courses</Link></li>
       <li className="hover:text-blue-400 text-2xl"><Link href="/contact-us">Contact Us</Link></li>
     </ul>
    
    <div className="flex space-x-4 md:mt-0">
        <button className="inline-flex items-center bg-cyan-600 text-white border-0 py-1 px-3 focus-outline-none hover:bg-blue-500 rounded text-base">
        Login
        </button>
        
    </div>
    <div className="flex space-x-4 md:mt-0">
        <button className="inline-flex items-center bg-cyan-600 text-white border-0 py-1 px-3 focus-outline-none hover:bg-blue-500 rounded text-base">
        SignUp
        </button>
       
    </div>
     </nav>

    );
}
