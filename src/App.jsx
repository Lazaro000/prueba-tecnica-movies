import { useEffect, useReducer, useState } from 'react';
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

const ACTIONS = {
	START_SEARCH: 0,
	SEARCH_SUCCESS: 1,
	SEARCH_ERROR: 2,
	SET_PAGE: 3
};

// * Custom hook
const useMovies = () => {
	const moviesSearchReducer = (state, action) => {
		switch (action.type) {
			case ACTIONS.START_SEARCH:
				return {
					...state,
					error: undefined,
					loading: true
				};

			case ACTIONS.SEARCH_SUCCESS:
				return {
					...state,
					movies: action.movies,
					loading: false
				};

			case ACTIONS.SEARCH_ERROR:
				return {
					...state,
					movies: undefined,
					error: action.error,
					loading: false
				};

			case ACTIONS.SET_PAGE:
				return {
					...state,
					page: action.page
				};

			default:
				throw new Error('Invalid action');
		}
	};

	const [moviesSearch, setMoviesSearch] = useReducer(moviesSearchReducer, {
		movies: undefined,
		page: 1,
		error: undefined,
		loading: false
	});

	const startSearch = () => {
		setMoviesSearch({
			type: ACTIONS.START_SEARCH
		});
	};

	const searchSuccess = movies => {
		setMoviesSearch({
			type: ACTIONS.SEARCH_SUCCESS,
			movies
		});
	};

	const searchError = error => {
		setMoviesSearch({
			type: ACTIONS.SEARCH_ERROR,
			error
		});
	};

	const setPage = page => {
		setMoviesSearch({
			type: ACTIONS.SET_PAGE,
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
