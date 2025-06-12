// app/formulario/page.tsx
export default function Formulario() {
  return (
    <section className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16 items-center">

        {/* Formulário */}
        <div className="bg-white p-8 rounded-2xl shadow-xl text-gray-900 w-full">
          <h2 className="text-2xl font-bold mb-6">Fale com a gente</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nome</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">E-mail</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mensagem</label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Escreva sua mensagem aqui..."
              />
            </div>
            <button
              type="button"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Enviar
            </button>
          </form>
        </div>

        {/* Textos de Destaque */}
        <div className="space-y-6 text-white">
          <h1 className="text-4xl font-bold leading-tight">Converse com a nossa equipe</h1>
          <p className="text-lg text-white/90">
            Estamos prontos para tirar suas dúvidas, ouvir suas ideias e te ajudar a transformar projetos em realidade.
          </p>
          <ul className="list-disc list-inside text-white/80">
            <li>Resposta rápida</li>
            <li>Equipe especializada</li>
            <li>Atendimento personalizado</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
