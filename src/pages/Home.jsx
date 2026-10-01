import GameCard from '../components/GameCard'
import jogoImg1 from '../assets/imagem01.png'
import jogoImg2 from '../assets/imagem02.png'
import jogoImg3 from '../assets/imagem03.png'
import jogoImg4 from '../assets/imagem04.png'
import jogoImg5 from '../assets/imagem05.png'
import jogoImg6 from '../assets/imagem06.png'

const Home = () => {
    const games = [
      {id:1, titulo: "Jogo-01", preco: "R$ 40,00", imagem: jogoImg1 },
      {id:2, titulo: "Jogo-02", preco: "R$ 60,00", imagem: jogoImg2 },
      {id:3, titulo: "Jogo-03", preco: "R$ 70,00", imagem: jogoImg3 },
      { id: 1, titulo: "Jogo-04", preco: "R$ 40,00", imagem: jogoImg4 },
      { id: 2, titulo: "Jogo-05", preco: "R$ 60,00", imagem: jogoImg5 },
      { id: 3, titulo: "Jogo-06", preco: "R$ 70,00", imagem: jogoImg6 },
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
