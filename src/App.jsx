import MovieCard from './components/movie-card';
import { useMoviesSearch } from './lib/hooks/use-movies-search';

const App = () => {
	const { movies, page, error, loading, setPage } = useMoviesSearch();

	// TODO: Aquí va un skeleton en lugar del loading guarro este
	if (loading) return <p>Cargando...</p>;

	if (error) return <p>{error}</p>;

	return (
		<div>
			<button onClick={() => setPage(page + 1)}>Página: {page}</button>
			<div className='container container-xl mx-auto flex flex-wrap'>
				{movies &&
					movies.map(movie => (
						<MovieCard
							key={movie.id}
							title={movie.title}
							image={movie.image}
							year={movie.year}
							rating={movie.rating}
						/>
					))}
			</div>
		</div>
	);
};

export default App;
