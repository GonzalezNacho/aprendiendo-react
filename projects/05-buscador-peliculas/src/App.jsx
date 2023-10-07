import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useEffect } from 'react'



function App() {

  const { movies } = useMovies()
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    if (query === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if(query.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)

  },[query])

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input onChange={handleChange} value={query} type="text" placeholder='Avengers, Star Wars, The Matrix ...'/>
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App