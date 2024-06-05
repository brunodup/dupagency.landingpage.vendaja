export default function Testmonials() {
  return (
    <div className="Testmonials md:max-w-[24%] border-2 border-zinc-100 rounded-lg pt-4 pb-4 p-8 text-zinc-100">
      <header className="pb-4 border-b-2 mb-4 border-zinc-100">
        <div className="flex justify-between">
          <h4 className="text-zinc-100">
            João da silva
            <small className="block text-zinc-400">Loja ABC</small>
          </h4>
          <div className="stars text-amber-500 text-4xl">
            <span>*</span>
            <span>*</span>
            <span>*</span>
            <span>*</span>
            <span>*</span>
          </div>
        </div>
      </header>
      <p className="text-zinc-100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum rerum assumenda quia, a expedita? Tempora accusamus nisi voluptate consequuntur quaerat ullam rerum sed vero, nam officiis perferendis, temporibus corporis?
      </p>

    </div>
  )
}