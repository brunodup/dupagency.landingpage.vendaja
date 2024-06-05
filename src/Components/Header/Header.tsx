import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between p-4 items-center sticky top-0 bg-zinc-50 shadow-xl flex-col md:flex-row">
      <div className="logo">
        <Image src="/images/logo-v1.png" width={160} height={30} alt="" />
      </div>
      <div className="nav flex gap-4 items-center flex-col md:flex-row">
        <a href="#features">Funcionalidades</a>
        <a href="#testi">Depoimentos</a>
        <a href="">Preço</a>
        <a href="" className="p-4 text-zinc-50 bg-brandPink rounded-lg  inline-flex">Criar uma loja descomplicada</a>
      </div>
    </header>
  )
}
