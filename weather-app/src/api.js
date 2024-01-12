export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a010e65108msh7ed33a901da7d81p184d78jsn2a171aad540c',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "bee04f3cc63c81eb9fbb09bee4f30960";

// try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
// } catch (error) {
//     console.error(error);
// }

