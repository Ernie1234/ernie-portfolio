import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="container flex justify-between items-center mx-auto p-2.5 px-5 fixed top-0 left-0 right-0">
      <h1 className="font-display hidden md:block font-semibold">
        Anumah Joshua Eneye{" "}
      </h1>
      <h1 className="font-tertiary block md:hidden">AJE</h1>
      <ul className="flex gap-4 font-primary">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </nav>
  );
}
