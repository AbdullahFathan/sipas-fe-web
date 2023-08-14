import Logo from "../assets/Logo";

const Navbar = () => {
  return (
    <nav className=" w-full z-50  bg-neutral-white sticky top-0">
      <div className=" ml-[100px] px-3 py-3 lg:px-5 lg:pl-3">
        <Logo />
      </div>
    </nav>
  );
};
export default Navbar;
