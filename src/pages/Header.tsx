import Navbar from "components/Navbar";

function Header() {
  return (
    <header className="py-[10px] px-0 block bg-[#07011e] border-b-[1px] border-b-white border-opacity-10 transition-all duration-300 ease-in fixed top-0 right-0 left-0 z-[1030]">
      <div className="overlay"></div>
      {/* container */}
      <div className="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1140px] w-full pr-[15px] pl-[15px] mr-auto ml-auto">
        {/* row */}
        <div className="flex flex-wrap -mr-[15px] -ml-[15px]">
          <Navbar />
        </div>
      </div>
    </header>
  );
}
export default Header;
