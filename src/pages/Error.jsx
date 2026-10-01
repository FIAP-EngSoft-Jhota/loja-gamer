import {Link} from "react-router-dom"

const Error = () => {
  return (
    <main className="px-[5%] my-20 grow text-center flex flex-col items-center justify-between">
      <h2 className="text-9xl font-bold text-[#003cff] mb-4">404</h2>
      <p className="text-2xl font-bold mb-2 text-cyan-400">Ops! Página não encontrada</p>
      <p className="text-gray-400 mb-8 max-w-md">Parece que você se perdeu no mapa do jogo! A pagina que você procurou não existe ou não foi encontrada!</p>
    </main>
  )
}

export default Error
