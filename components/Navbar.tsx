import Link from "next/link";
import Image from "next/image";

const NavBar = () => (
  <header className="w-full  absolute z-10">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 ">
      <Link href="/" className="flex justify-center items-center">
        <Image
          src="/carlogo.svg"
          alt="logo"
          width={50}
          height={18}
          className="object-contain"
        />
      </Link>

      <Link
        href="/car"
        className="text-bold rounded-full padding-x padding-y text-white min-w-[130px]"
      >
        Rent a Car{" "}
      </Link>
    </nav>
  </header>
);

export default NavBar;
