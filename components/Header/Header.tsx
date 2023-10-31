import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between h-16 px-4 mt-8">
      <div>
        <span className="text-3xl cursor-pointer">
          <Link href="/">Rumlog</Link>
        </span>
      </div>
    </header>
  );
}

export default Header;
