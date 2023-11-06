import Link from "next/link";

const RESUME_LINK = "https://rumka.notion.site/Yongseong-Jeon-43e8dae33e0049dfada8163051226901?pvs=4";
const GITHUB_LINK = "https://github.com/yongseongjeon";

function Header() {
  return (
    <header className="sticky top-0 flex justify-between h-10 p-6 text-3xl bg-white">
      <div>
        <span className="cursor-pointer">
          <Link href="/">Rumlog</Link>
        </span>
      </div>
      <div className="flex gap-8">
        <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
          <span>Resume</span>
        </a>
        <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
          <span>GitHub</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
