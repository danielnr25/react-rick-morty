import { useState } from 'react';
import image from './assets/image.png'
import Characters from './components/Characters';


function App() {
  const [characters, setCharacters] = useState(null);

  const Api = async () => {
    const resp = await fetch('https://rickandmortyapi.com/api/character');
    const data = await resp.json();
    setCharacters(data.results)
  }

  return (
    <div className='mx-auto p-10 max-w-7xl justify-center'>
      <header className='bg-white shadow-md shadow-gray-400 rounded-md items-center text-center'>
        <h1 className='text-5xl font-bold text-emerald-800 tracking-wide p-5'>Rick & Morty</h1>
        <div className='py-10 px-16'>
          {
            characters ?
              <Characters characters={characters} setCharacters={setCharacters} /> :
              <>
                <div className='flex justify-center p-4'>
                  <img src={image} alt="image" className='w-96 m-2 ' />
                </div>
                <button onClick={Api} className='bg-gray-600 px-4 py-1 rounded-md text-white hover:bg-gray-500'>Buscar</button>
              </>
          }
        </div>
      </header>
    </div>
  )
}

export default App
