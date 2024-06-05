'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

import Hero from "@/Components/Hero/Hero";
import Testmonials from "@/Components/Testmonials/Testmonials";
import TestmonialsShort from "@/Components/Testmonials/TestmonialsShort";
import PlanCard from "@/Components/Plans/PlanCard";
import Header from "@/Components/Header/Header";
import HeroMobile from "@/Components/Hero/HeroMobile";
import MailchimpForm from "@/Components/MailchimpForm/MailchimpForm";

export default function Home() {
  const [isMobile,setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window && window.outerWidth <= 1024)
  },[])

  return (
    <div className="bg-zinc-50 text-zinc-900">
      {
        isMobile ? 
        <HeroMobile />
        : 
        <Hero />
      }
      <Header />
      <main>
        <section className="reviews bg-zinc-600 p-8 flex justify-between">
          <TestmonialsShort />
          <TestmonialsShort />
          <TestmonialsShort />
        </section>
        <section id="features" className="features md:h-dvh bg-zinc-100 p-8 pt-12 pb-12">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 w-full">
              <Image src="" className="border-2 h-full" alt="" />
            </div>
            <div className="md:w-1/2 w-full">
              <h2 className="text-3xl md:text-6xl font-black">Funcionalidades</h2>
              <p className="font-1xl text-zinc-600 mb-8 mt-4 font-bold">Criamos uma lista de funcionalidades que conversam com sua loja VTEX.IO para que você tenha diversas possibilidades sem precisar de um desenvolvedor.</p>
              <ul>
                <li className="flex gap-4 items-center mb-4">
                  <span className="inline-flex p-2 rounded-lg bg-brandCandyPink"></span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, quaerat! Iste, iusto.</p>
                </li>
                <li className="flex gap-4 items-center mb-4">
                  <span className="inline-flex p-2 rounded-lg bg-brandCandyPink"></span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, quaerat! Iste, iusto.</p>
                </li>
                <li className="flex gap-4 items-center mb-4">
                  <span className="inline-flex p-2 rounded-lg bg-brandCandyPink"></span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, quaerat! Iste, iusto.</p>
                </li>
                <li className="flex gap-4 items-center mb-4">
                  <span className="inline-flex p-2 rounded-lg bg-brandCandyPink"></span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, quaerat! Iste, iusto.</p>
                </li>
                <li className="flex gap-4 items-center mb-4">
                  <span className="inline-flex p-2 rounded-lg bg-brandCandyPink"></span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, quaerat! Iste, iusto.</p>
                </li>
                <li className="flex gap-4 items-center mb-4">
                  <span className="inline-flex p-2 rounded-lg bg-brandCandyPink"></span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, quaerat! Iste, iusto.</p>
                </li>
                <li className="flex gap-4 items-center mb-4">
                  <span className="inline-flex p-2 rounded-lg bg-brandCandyPink"></span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, quaerat! Iste, iusto.</p>
                </li>
                <li className="flex gap-4 items-center mb-4">
                  <span className="inline-flex p-2 rounded-lg bg-brandCandyPink"></span>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, quaerat! Iste, iusto.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="cta md:h-dvh bg-zinc-50 flex flex-col items-center justify-center pt-12 pb-12 p-8">
          <div className="flex jusfity-center items-center flex-col">
            <h2 className="text-brandPink text-3xl md:text-7xl text-center font-black w-5/6">Construa agora mesmo a sua loja virtual em até 24 horas</h2>
            <p className="md:w-1/2 text-lg text-center mt-10 mb-2 md:mb-8">
              Tenha a liberdade para alterar posições adicionar blocos, alterar cores e fontes das páginas do seu site, de forma descomplicada.
              <strong className="inline-flex text-center justify-center w-full">Sem precisar de um programador!</strong>
            </p>
            <MailchimpForm />
          </div>
        </section>
        <section className="testimonials bg-zinc-800 pt-12 pb-12 p-8">
          <h3 className="text-zinc-50 text-center mb-12">Palavras de quem confia que a <strong>gestão de loja</strong> pode ser <strong>descomplicada</strong></h3>
          <div className="flex flex-wrap gap-4">
            <Testmonials />
            <Testmonials />
            <Testmonials />
            <Testmonials />
          </div>
        </section>
        {/* <section className="brands bg-brandCandyPink  pt-12 pb-12 p-8">
          <h3 className="text-zinc-50 text-center">Lojas que trabalham de forma <strong>descomplicada</strong> com nossa ferramenta</h3>


        </section> */}
        <section className="plans relative bg-zinc-100 pt-12 pb-0 p-8">
          <h2 className="text-3xl md:text-6xl font-black">Diversos planos</h2>
            <p className="text-1xl text-zinc-600 mb-8 mt-4 font-bold">Para diversas necessidades.</p>

          <div className="discountPlans absolute p-4 bg-zinc-950/50 w-full h-full top-0 left-0 flex justify-center items-center">
            <div className="bg-zinc-50 p-8 rounded-lg">
              <h2 className="font-black text-3xl">Plano único para o lançamento</h2>
              <p>Visando parcerias que nos ajudem a evoluir a ferramenta, e que queiram crescer e aproveitar todas as funcionalidades. <br />
                Para os primeiros 10 clientes, no contrato anual estamos oferecendo o plano por <strong>R$ 900,00 / mês</strong> no primeiro ano. <br />
                E acesso prioritario a todas as funcionalidades lançadas sempre!</p>
                <a href="" className="cta trasnition-all font-bold uppercase bg-brandPink hover:bg-brandDarkPink text-zinc-50 p-4 rounded-lg flex justify-center items-center w-1/2 mt-8">Quero ajudar a construir a ferramenta</a>
            </div>
          </div>

          <div className="plansContent flex gap-8 flex-col md:flex-row">
            <PlanCard />
            <PlanCard />
            <PlanCard />
            <PlanCard />
          </div>
        </section>
        <section className="faq md:h-dvh bg-zinc-900 pt-12 pb-0 p-8">
          <h2 className="text-3xl md:text-6xl font-black text-zinc-50">Alguma dúvida?</h2>
          <p className="text-1xl md:w-1/3 text-zinc-600 mb-8 mt-4 font-bold">Confira nossas respostas para as dúvidas mais frequentes, e tenha a certeza de fazer a escolha certa</p>
        </section>
      </main>
      <footer className="bg-zinc-600 text-zinc-50 flex justify-center items-center p-12">
        por <a href="https://dup.agency" className="inline-flex ml-2">dup.agency</a>
      </footer>
    </div>
  );
}
