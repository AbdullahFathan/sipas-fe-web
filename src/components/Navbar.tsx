import Logo from "../assets/Logo";

const Navbar = () => {
  return (
    <nav className=" w-full bg-neutral-white">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <Logo />
      </div>
    </nav>
  );
};
export default Navbar;
