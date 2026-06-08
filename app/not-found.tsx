import Link from 'next/link';
import './globals.css';
export default function NotFound() {
  return (
    <>
    <h1 className="bg-red-100 flex text-2xl text-center">404</h1>
    <p>Pagina No Encontrada</p>
    <div>
      <Link href="/"> Volver </Link>
    </div>
    </>
    );
}