import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-zinc-100 md:h-dvh p-8 flex flex-col justify-center items-start">
        <a href="" className="mb-4 md:mb-24 inline-flex">
          <Image src="/images/logo-v1.png" width={160} height={30} alt="" />
        </a>
        <div className="title flex flex-col text-5xl md:text-8xl font-black mb-8">
          <span>Adicione</span>
          <span>Personalize</span>
          <span>Venda</span>
        </div>
        <p className="mb-8 text-md md:text-xl">
          Tenha autonomia completa sobre sua loja <strong>VTEX</strong>, adicione novos blocos, altere a ordem, personalize cores e estilos, de forma <strong>descomplicada</strong>, sem precisar de um desenvolvedor.
        </p>
        <a href="" className="p-4 text-zinc-50 bg-brandPink rounded-lg inline-flex">Criar uma loja descomplicada</a>
      </div>
      <div className="w-full md:w-1/2 bg-brandPink p-8 relative">
        <Image className="relative md:absolute md:-left-24 md:top-48" src="/images/banner.png" width={756 /1.5} height={270 / 1.5} alt="" />
        <Image className="relative md:absolute md:bottom-0 md:right-0" src="/images/grid.png" width={356 /1.2} height={681 /1.2} alt="" />
        <Image className="relative md:absolute md:top-0 md:right-0" src="/images/product.png" width={813 /1.5} height={215 /1.5} alt="" />
        <Image className="relative md:absolute md:bottom-5 md:-left-10" src="/images/shelf-1.png" width={332 /1.2} height={407 /1.2} alt="" />
        <Image className="relative md:absolute md:-bottom-20 md:left-48 scale-75" src="/images/shelf-2.png" width={332 /1.2} height={407 /1.2} alt="" />
      </div>
    </section>
  )
}