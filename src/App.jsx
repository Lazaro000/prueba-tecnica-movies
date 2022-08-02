import MoviesGrid from './components/movies-grid';
import { useMoviesSearch } from './lib/hooks/use-movies-search';

const App = () => {
	const { movies, searchTerm, page, error, loading, setSearchTerm, setPage } =
		useMoviesSearch();

	// TODO: Aquí va un skeleton en lugar del loading guarro este
	if (loading) return <p>Cargando...</p>;

	if (error) return <p>{error}</p>;

	return (
		<div>
			<input
				type='text'
				value={searchTerm}
				onChange={ev => setSearchTerm(ev.target.value)}
				placeholder='Buscar...'
			/>
			<button onClick={() => setPage(page + 1)}>Página: {page}</button>
			<MoviesGrid movies={movies} loading={loading} error={error} />
		</div>
	);
};

export default App;
