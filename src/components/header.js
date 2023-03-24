import Image from "next/image";
import Link from "next/link";
import logo2 from "../images/logo2.png";

function Header() {
  return (
    <header id="cabecera">
      <div className="logo">
        <h2>AVRYL</h2>
        <Image src={logo2} alt="img" />
      </div>

      <div>
        <Link href="/">Regresar</Link>
      </div>
    </header>
  );
}

export default Header;
