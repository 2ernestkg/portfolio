import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavItemProps {
  href: string;
  title: string;
}
function NavItem({ href, title }: NavItemProps) {
  return (
    <li className="mx-[8px] my-[16px] list-none box-border">
      <a
        className="md:px-2 block px-0 py-2 text-[14px] font-semibold leading-[0.71] tracking-normal opacity-90 text-white font-roboto"
        href={href}
      >
        {title}
      </a>
    </li>
  );
}
function Navbar() {
  return (
    <nav className="lg:flex-row lg:flex-nowrap lg:justify-start w-full relative flex flex-wrap items-center justify-between py-[10px] px-0 transition-all duration-300 ease-in-out ">
      <a
        href="index.html"
        className="block pt-[0.3125rem] pb-[0.3125rem] mr-[1rem] text-xl leading-[inherit] whitespace-nowrap"
      >
        <img src="assets/images/logo.svg" alt="Home" />
      </a>
      <button
        type="button"
        data-hs-collapse="#navbar-collapse-with-animation"
        aria-controls="navbar-collapse-with-animation"
        aria-label="Toggle navigation"
        className="hs-collapse-toggle md:px-3 md:hidden ml-[15px] p-[8px] text-xl leading-[1] md:bg-transparent bg-white border-solid border md:border-transparent border-[#0a1f48] rounded"
      >
        <span className="text-[20px] leading-[30px] inline-block w-[1.5em] h-[1.5em] align-middle bg-no-repeat bg-center bg-100%">
          <FontAwesomeIcon icon={faBars} />
        </span>
      </button>
      <div
        id="navbar-collapse-with-animation"
        className="hs-collapse hidden basis-full md:basis-auto md:flex flex-grow items-center"
      >
        <ul className="list-none m-0 p-0 flex flex-col mt-[10px] md:mt-0 ml-auto md:flex-row">
          <NavItem href="#about" title="Abount" />
          <NavItem href="#service" title="Services" />
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
