export default function PlanCard() {
  return(
    <article className="plan bg-zinc-50 p-6 flex flex-col gap-4 rounded-t-2xl">
      <h2 className="text-2xl font-black">
        Name
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, corrupti?
      </p>
      <h3 className="text-3xl font-black">
        R$ 2.000,00
      </h3>
      <a href="" className="cta trasnition-all font-bold uppercase bg-brandPink hover:bg-brandDarkPink text-zinc-50 p-4 rounded-lg flex justify-center items-center">Quero este plano</a>
      <ul className="features text-xs leading-6 text-zinc-600">
        <li>Lorem, ipsum.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>lorem</li>
      </ul>
    </article>
  )
}