import responsMovies from '../mocks/with-results.json'
import whitoutResult from '../mocks/no-results.json'

export function useMovies () {
    const movies = responsMovies.Search
    
    const mappedMovies = movies?.map (movie => ({
        id: movie.imdbID,
        title: movie.Title,
        poster: movie.Poster,
        year: movie.Year,
        type: movie.Type
    }))

    return {movies:mappedMovies}
}
