import GameCard from '../components/GameCard'
import jogoImg from '../assets/Jogo01.jpg'

const Home = () => {
    const games = [
      {id:1, titulo: "Jogo-01", preco: "R$ 40,00", imagem: jogoImg },
      {id:2, titulo: "Jogo-02", preco: "R$ 60,00", imagem: jogoImg },
      {id:3, titulo: "Jogo-03", preco: "R$ 70,00", imagem: jogoImg },
    ];

  return (
    <>
      <main className='px-[5%] mt-10 mb-16 flex-grow'>
        <h2 className='titulo text-3xl'>Produtos em Destaques</h2>
        <section className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6'>
          {games.map((game)=>(
            <GameCard
              key={game.id}
              titulo={game.titulo}
              preco={game.preco}
              imagem={game.imagem}
            />
          ))}
        </section>

      </main>
    </>
  )
}

export default Home
