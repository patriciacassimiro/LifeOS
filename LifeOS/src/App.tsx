import { useState } from 'react';

function App() {
  const [info, setInfo] = useState(false);
  const handleClick = () => {
    setInfo(!info);
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-slate-900">
      <h1 className="text-6xl font-bold text-sky-400 animate-pulse">
       Aplicação em desenvolvimento! A versão final será lançada em breve.
      </h1>
      <button onClick={handleClick}  className="mt-4 rounded bg-sky-400 px-4 py-2 text-lg font-semibold text-slate-900 hover:bg-sky-500 position-absolute bottom-0 left-0 m-4">
       {info ? 'Ocultar Informações' : 'Mostrar Informações'}
      </button>
      {info && (
        <p className="mt-4 text-lg text-slate-300">
          Construida com React, TailwindCSS e TypeScript. Com o objetivo de melhorar nossos hábitos diarios e aumentar nossa produtividade.  
        </p>
      )}
       <div className="fixed bottom-0 left-0 w-full bg-slate-800 text-slate-300 p-4 text-center">
        <p>© 2026 LifeOS. Todos os direitos reservados.</p>
    </div>  
    </div>
  )
}

export default App;
