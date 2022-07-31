import { useMoviesSearch } from './lib/hooks/use-movies-search';

const App = () => {
	const { movies, page, error, loading, setPage } = useMoviesSearch();

	// TODO: Aquí va un skeleton en lugar del loading guarro este
	if (loading) return <p>Cargando...</p>;

	if (error) return <p>{error}</p>;

	return (
		<div>
			<button onClick={() => setPage(page + 1)}>Página: {page}</button>
			{movies &&
				movies.map(movie => <div key={movie.id}>{movie.title}</div>)}
		</div>
	);
};

export default App;
