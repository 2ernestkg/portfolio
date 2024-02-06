import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return ( 
          <nav className="w-full pt-3 pb-2 relative flex flex-wrap items-center justify-between transition-all duration-300">
            <a href="index.html" className="block pt-1.5 pb-1.5 mr-4 text-xl whitespace-nowrap">
              <img src="assets/images/logo.svg" alt="Home" />
            </a>
            <div className="sm:hidden">
              <button type="button"
                data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"
                className="hs-collapse-toggle bg-white m-0 overflow-visible outline-0 rounded p-2 ml-4 border border-solid border-[#0a1f48] cursor-pointer"
              >
                <span className="inline-block w-6 h-6 align-middle bg-no-repeat bg-center text-xl">
                  <FontAwesomeIcon icon={faBars} />
                </span>
              </button>
            </div>
            <div id="navbar-collapse-with-animation" className="text-white hs-collapse hidden box-border basis-full flex-grow items-center">
              <ul className="flex flex-col pl-0 mb-0 list-none mr-0 ml-auto mt-[10px]">
                <li className="mt-[10px] mb-[10px] mr-[8px] ml-[8px] list-none list-item">
                    <a href="#about">About</a>
                </li>
                <li>
                  <a href="#service">Services</a>
                </li>
              </ul>
            </div>
          </nav>
        
  );
}
export default Navbar;
