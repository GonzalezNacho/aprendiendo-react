import { searchMovies } from '../services/movies'
import { useCallback, useMemo, useRef, useState } from 'react'

export function useMovies ({search, sort}) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previusSearch = useRef(search)

    const getMovies = useCallback(
        async ({search}) => {
            if (search === previusSearch.current) return

            try {
                setLoading(true)
                setError(null)
                previusSearch.current = search
                const newMovies = await searchMovies({search})
                setMovies(newMovies ?? [])
            } catch (e) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        },[])

    const sortedMovies = useMemo(() => {
        console.log(movies)
        return sort
            ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
            : movies
    }, [sort, movies])

    return {movies : sortedMovies, getMovies, loading}
}
