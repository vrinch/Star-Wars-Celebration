const axios = require('axios');
const querystring = require('querystring');

async function run(film, character) {
    // URL encode the film and character names
    const encodedFilm = querystring.escape(film);
    const encodedCharacter = querystring.escape(character);

    try {
        // Fetch the film data
        const filmResponse = await axios.get(`https://challenges.hackajob.co/swapi/api/films/?search=${encodedFilm}`);
        const filmData = filmResponse.data.results[0];
        
        // Fetch the character data
        const characterResponse = await axios.get(`https://challenges.hackajob.co/swapi/api/people/?search=${encodedCharacter}`);
        const characterData = characterResponse.data.results[0];
        
        // Get characters in the film
        const filmCharacters = filmData ? filmData.characters : [];
        const filmCharacterNames = await Promise.all(filmCharacters.map(async (url) => {
            const response = await axios.get(url);
            return response.data.name;
        }));
        
        // Get films for the character
        const characterFilms = characterData ? characterData.films : [];
        const characterFilmTitles = await Promise.all(characterFilms.map(async (url) => {
            const response = await axios.get(url);
            return response.data.title;
        }));

        // Sort the lists alphabetically
        const sortedFilmCharacterNames = filmCharacterNames.sort().join(', ');
        const sortedCharacterFilmTitles = characterFilmTitles.length ? characterFilmTitles.sort().join(', ') : 'none';

        // Format the result
        const result = `${film}: ${sortedFilmCharacterNames}; ${character}: ${sortedCharacterFilmTitles}`;
        
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        return '';
    }
}

module.exports = { run };
