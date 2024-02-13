interface NavItemProps {
  href: string;
  title: string;
}
function NavItem({ href, title }: NavItemProps) {
  return (
    <li className="">
      <a href={href}>{title}</a>
    </li>
  );
}
function Navbar() {
  return (
    <nav className="lg:flex-row lg:flex-nowrap lg:justify-start relative flex flex-wrap items-center justify-between pt-[10px] pb-[10px] transition-all duration-300 ease-in-out ">
      <a
        href="index.html"
        className="block pt-[0.3125rem] pb-[0.3125rem] mr-[1rem] text-xl whitespace-nowrap"
      >
        <img src="assets/images/logo.svg" alt="Home" />
      </a>
      {/* 
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
            */}
      <div
        id="navbar-collapse-with-animation"
        className="hs-collapse md:basis-auto md:flex flex-grow items-center basis-full"
      >
        <ul className="list-none mb-0 pl-0 flex flex-col ml-auto md:flex-row">
          <NavItem href="#about" title="Abount" />
          <NavItem href="#service" title="Services" />
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
