import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate ();

function pathMathRoute(route){ 
  if (route === location.pathname){
    return true
  }
}


  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">

    <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">

      <div>
        <img src="/Earthange.png" alt="logo" className="h-28 w-35 cursor-pointer" onClick={()=>navigate("/")}/>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-transparent ${pathMathRoute("/") && "text-black black border-b-black"}`}onClick={()=>navigate("/")}>Home</li>
          <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-transparent ${pathMathRoute("/offers") && "text-black black border-b-black"}`}onClick={()=>navigate("/offers")}>Offers</li>
          <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-transparent ${pathMathRoute("/sign-in") && "text-black black border-b-black"}`}onClick={()=>navigate("/sign-in")}>Sign in</li>
        </ul>
      </nav>
    </header>
    </div>
  );
} 