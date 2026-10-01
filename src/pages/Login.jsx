import { use, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'


const Login = () => {

  //Hook- useState- manipula o estado da váriavel
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  // Hook- useNavigate- Navega entre os componentes
  const navigate = useNavigate();
  //função de login
  const login = (e) => {
    e.preventDefault();
    alert(`Bem-Vindo(a),${email}`);
    //Direciona para a página Home
    navigate("/");
  }
  return (
    <main className="grow flex items-center justify-center px-4 login" >
      <div className="bg-black p-8 sm:p-10 rounded-[20px] w-full max-w-md shadow-2xl border-2 border-[#006eff]">

        {/* Título com o mesmo estilo neon do site */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#006eff] text-center mb-8 uppercase tracking-wider">
          Login Gamer
        </h2>

        <form onSubmit={Login} className="flex flex-col gap-5">
          <div>
            <label className="block text-white mb-2 text-sm font-semibold tracking-wide">E-mail</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full p-3.5 rounded-xl bg-[#1a1a1a] text-white border border-gray-700 focus:border-[#006eff] focus:ring-1 focus:ring-[#006eff] outline-none transition-all placeholder:text-gray-500"
            />
          </div>

          <div>
            <label className="block text-white mb-2 text-sm font-semibold tracking-wide">Senha</label>
            <input
              type="password"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="••••••••"
              className="w-full p-3.5 rounded-xl bg-[#1a1a1a] text-white border border-gray-700 focus:border-[#006eff] focus:ring-1 focus:ring-[#006eff] outline-none transition-all placeholder:text-gray-500"
            />
          </div>

          {/* Botão com o mesmo gradiente e efeito dos cards */}
          <button
            type="submit"
            className="border-4 border-[#7eb6ff] mt-2 bg-linear-r from-cyan-400 to-purple-600 w-full py-3.5 rounded-[20px] text-[#6aaaff] font-bold text-lg transition-all duration-300 hover:opacity-90 hover:scale-105 hover:text-white cursor-pointer shadow-lg"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Ainda não tem conta? <Link to="/contato" className="text-[#006eff] hover:underline font-medium">Fale conosco</Link>
        </p>
      </div>
    </main>
  )
}

export default Login
