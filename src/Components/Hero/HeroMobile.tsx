import Image from "next/image";

export default function HeroMobile() {
  return (
    <section className="hero flex flex-col md:flex-row bg-zinc-100">
      <div className="w-full flex">
        <a href="" className="mb-4 md:mb-24 inline-flex justify-center items-start p-4 pt-8 bg-zinc-100 w-3/5">
          <Image src="/images/logo-v1.png" width={160} height={30} />
        </a>
        <div className=" bg-brandPink">
          <Image className="relative left md:top-0 md:right-0" src="/images/product.png" width={813 /1.5} height={215 /1.5} alt="" />
          <Image className="relative md:absolute -left-24 md:top-48" src="/images/banner.png" width={756 /1.5} height={270 / 1.5} alt="" />
        </div>
      </div>
      <div className="w-full p-4 mb-8">
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
      <div className="w-5/6 bg-brandPink">
        <Image className="absolute md:bottom-0 -right-10 scale-75" src="/images/grid.png" width={356 /1.2} height={681 /1.2} alt="" />
        <Image className="relative md:absolute -top-20 -left-10 scale-75" src="/images/shelf-1.png" width={332 /1.2} height={407 /1.2} alt="" />
      </div>

      {/* <div className="w-full md:w-1/2 bg-zinc-100 md:h-dvh p-8 flex flex-col justify-center items-start">
        
      </div>
      <div className="w-full md:w-1/2 bg-brandPink p-8 relative">
      </div> */}
    </section>
  )
}