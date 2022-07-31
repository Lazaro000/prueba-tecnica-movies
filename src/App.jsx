import { useEffect, useState } from 'react';
import { searchTrendingMovies } from './lib/api/search-trending-movies';

const App = () => {
	const { movies, page, error, loading, setPage } = useMovies();

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

const searchTrending = async (
	page,
	startSearch,
	searchSuccess,
	searchError
) => {
	// Start search
	startSearch();

	const { success, data, statusCode } = await searchTrendingMovies(page);

	if (success) {
		// Search success
		searchSuccess(data.movies);
	} else {
		// Search error
		searchError(`Error: ${statusCode}`);
	}
};

// * Custom hook
const useMovies = () => {
	const [moviesSearch, setMoviesSearch] = useState({
		movies: undefined,
		page: 1,
		error: undefined,
		loading: false
	});

	// Start search
	const startSearch = () => {
		setMoviesSearch({
			...moviesSearch,
			error: undefined,
			loading: true
		});
	};

	// Search success
	const searchSuccess = movies => {
		setMoviesSearch({
			...moviesSearch,
			movies,
			error: undefined,
			loading: false
		});
	};

	// Search error
	const searchError = error => {
		setMoviesSearch({
			...moviesSearch,
			movies: undefined,
			error,
			loading: false
		});
	};

	const setPage = newPage =>
		setMoviesSearch(prevState => ({
			...prevState,
			page: newPage
		}));

	useEffect(() => {
		searchTrending(
			moviesSearch.page,
			startSearch,
			searchSuccess,
			searchError
		);
	}, [moviesSearch.page]);

	return { ...moviesSearch, setPage };
};

// // * Custom hook
// const useMovies = () => {
// 	// Cómo convertir 4 estados en 1 solo
// 	const [movies, setMovies] = useState();
// 	const [page, setPage] = useState(1);
// 	const [error, setError] = useState();
// 	const [loading, setLoading] = useState(false);

// 	useEffect(() => {
// 		searchTrending(page, setMovies, setError, setLoading);
// 	}, [page]);

// 	return { movies, page, error, loading, setPage };
// };

export default App;
