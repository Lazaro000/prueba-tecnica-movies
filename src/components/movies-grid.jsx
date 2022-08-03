import MovieCard from './movie-card';

const MoviesGrid = ({ movies, loading, error, setPreviewMovie }) => {
	// TODO: Aquí va un skeleton en lugar del loading guarro este
	if (loading) return <p>Cargando...</p>;

	if (error) return <p>{error}</p>;

	return (
		<div className='flex flex-wrap'>
			{movies &&
				movies.map(movie => (
					<MovieCard
						key={movie.id}
						title={movie.title}
						image={movie.image}
						year={movie.year}
						rating={movie.rating}
						onClick={() => setPreviewMovie(movie)}
					/>
				))}
		</div>
	);
};

export default MoviesGrid;
