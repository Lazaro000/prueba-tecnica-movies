import { API_HOST } from '../../constants/api';

const TRENDING_MOVIES_PATH = '/trending/movie/day';

export const searchTrendingMovies = async page => {
	try {
		const response = await fetch(
			`${API_HOST}${TRENDING_MOVIES_PATH}?api_key=${
				import.meta.env.VITE_API_KEY
			}&page=${page}`
		);

		if (response.ok) {
			const { results: movies, total_results: totalPages } =
				await response.json();

			return {
				success: true,
				data: {
					movies,
					totalPages
				}
			};
		}

		// TODO: Notificar a desarrollo

		return {
			success: false,
			statusCode: response.status
		};
	} catch (error) {
		console.error(error);

		return {
			success: false,
			code: 500
		};
	}
};
