import { motion } from "framer-motion"

function Movie({ movie }) {
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }

    return (
        <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
            <h2>{truncate(movie.title, 20)}</h2>
            <div className="img-container">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
            </div>
        </motion.div>
    )
}

export default Movie