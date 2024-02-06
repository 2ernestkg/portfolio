import Navbar from "components/Navbar";

function Header() {
  return (
    <header className="transition-all duration-300 ease-in">
      <div className="overlay"></div>
      <div className="max-w-2xl ml-auto mr-auto pr-4 pl-4">
        <div className="flex flex-wrap -mr-4 -ml-4">
          <Navbar />
        </div>
      </div>
    </header>
  );
}
export default Header;
