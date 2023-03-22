//Components
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <div>
          <img src="logo.png" alt="Logo" />
          <h1>Stránka nenalezena</h1>
          <p>Zkus se vrátit na <Link href="/">domovskou stránku</Link></p>
        </div>
      </main>
    </>
  );
}
