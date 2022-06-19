import AsyncStorage from "@react-native-async-storage/async-storage";

// Search saved movies
export async function getMoviesSave(key) {
    const myMovies = await AsyncStorage.getItem(key);

    let moviesSave = JSON.parse(myMovies) || [];

    return moviesSave;
}

// Save new movies to list
export async function saveMovie(key, newMovie) {
    let moviesStored = await getMoviesSave(key);

    // Verify if new movie exists
    const hasMovie = moviesStored.some(item => item.id === newMovie.id);

    if (hasMovie) {
        console.log("Movie already exists to your list");
        return;
    }

    moviesStored.push(newMovie);

    await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
    console.log("Movie saved successfully to your list");
}

// Delete any specific movie 
export async function deleteMovie(id) {
    let moviesStored = await getMoviesSave('@reactflix');

    let myMovies = moviesStored.filter(item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem('@reactflix', JSON.stringify(myMovies));
    console.log("Movie deleted successfully");
    return myMovies;
}

// Filter if movie already saved in the list
export async function hasMovie(movie) {
    let moviesStored = await getMoviesSave('@reactflix');

    const hasMovie = moviesStored.find(item => item.id === movie.id)

    if (hasMovie) {
        return true;
    }

    return false;
}