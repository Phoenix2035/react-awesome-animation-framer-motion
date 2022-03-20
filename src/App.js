import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import axios from "axios"

import Movie from "./components/Movie"
import Filter from "./components/Filter"

function App() {
    const [movies, setMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])
    const [activeGenre, setActiveGenre] = useState(0)




    useEffect(() => {
        (async function () {
            const { data } = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=41f05fcf3dfeadf63967c8197b148e4f&language=en-US&page=1")

            setMovies(data?.results)
            setFilteredMovies(data?.results)
        })()
    }, [])


    return (
        <>
            <Filter movies={movies} setFilteredMovies={setFilteredMovies} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
            <motion.div className="popular-movies" layout>
                <AnimatePresence>
                    {filteredMovies.map(item =>
                        <Movie key={item.id} movie={item} />
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
}

export default App;
