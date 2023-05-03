
function Characters(props) {
   const { characters, setCharacters } = props;

   const resetCharacters = () => {
      setCharacters(null)
   }

   return (
      <div className="mx-auto">
         <div className="flex justify-center items-center space-x-4 mb-10">
            <h3 className="font-semibold text-lg">Personajes</h3>
            <span className="text-indigo-600 cursor-pointer font-semibold" onClick={resetCharacters}>Volver a la home</span>
         </div>
         <div className="grid gap-4 grid-cols-3 mb-4">
            {
               characters.map((character) => (
                  <div className="bg-gray-200 rounded-lg p-4" key={character.id}>
                     <div className="flex justify-center mb-4">
                        <img src={character.image} className="w-full h-30 rounded-t-md rounded-b-md" alt={character.name} />
                     </div>
                     <h3 className="font-semibold mb-2">{character.name}</h3>
                     <div className="flex justify-end mb-2">
                        <span className={`text-sm font-medium px-2 py-1 rounded ${character.status === 'Alive' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                           {character.status}
                        </span>
                     </div>
                     <p className="text-sm mb-1">
                        <span className="text-gray-600 font-medium">Episodios:</span>
                        <span className="ml-2">{character.episode.length}</span>
                     </p>
                     <p>
                        <span className="text-gray-600 font-medium">Especies:</span>
                        <span className="ml-2">{character.species}</span>
                     </p>
                  </div>
               ))}
         </div>
         <span className="text-indigo-600 cursor-pointer font-semibold" onClick={resetCharacters}>Volver a la home</span>
      </div>
   )
}

export default Characters