import { useEffect, useReducer, useState } from 'react';
import { searchTrendingMovies } from './lib/api/search-trending-movies';
import {
	moviesSearchReducer,
	MOVIES_SEARCH_ACTIONS,
	MOVIES_SEARCH_INITIAL_STATE
} from './lib/reducers/movies-search.reducer';

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
	const [moviesSearch, setMoviesSearch] = useReducer(
		moviesSearchReducer,
		MOVIES_SEARCH_INITIAL_STATE
	);

	const startSearch = () => {
		setMoviesSearch({
			type: MOVIES_SEARCH_ACTIONS.START_SEARCH
		});
	};

	const searchSuccess = movies => {
		setMoviesSearch({
			type: MOVIES_SEARCH_ACTIONS.SEARCH_SUCCESS,
			movies
		});
	};

	const searchError = error => {
		setMoviesSearch({
			type: MOVIES_SEARCH_ACTIONS.SEARCH_ERROR,
			error
		});
	};

	const setPage = page => {
		setMoviesSearch({
			type: MOVIES_SEARCH_ACTIONS.SET_PAGE,
			page
		});
	};

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

export default App;
