import { useEffect } from 'react'

function Filter({ movies, setFilteredMovies, activeGenre, setActiveGenre }) {

    const genreCode = [
        { code: 0, genre: "All" },
        { code: 28, genre: "Action" },
        { code: 35, genre: "Comedy" },
    ]

    useEffect(() => {
        if (activeGenre === 0) {
            setFilteredMovies(movies)
            return
        }
        const filtered = movies.filter(item => item.genre_ids.includes(activeGenre))

        setFilteredMovies(filtered)

    }, [movies, activeGenre, setFilteredMovies])


    return (
        <div className="filter-container">
            {
                genreCode.map(item =>
                    <button onClick={() => setActiveGenre(item.code)} className={activeGenre === item.code ? "active" : ""}>
                        {item.genre}
                    </button>
                )
            }

        </div>
    )
}

export default Filter