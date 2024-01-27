class Movie {
    constructor(title, genre, releaseYear, isAvailable = true) {
      this.title = title;
      this.genre = genre;
      this.releaseYear = releaseYear;
      this.isAvailable = isAvailable;
    }
  }
  
  class MovieStore {
    constructor() {
      this.movies = [];
    }
  
    addMovie(title, genre, releaseYear) {
      const movie = new Movie(title, genre, releaseYear);
      this.movies.push(movie);
      console.log(`${movie.title} added to the store.`);
    }
  
    rentMovie(title) {
      const movie = this.findMovie(title);
  
      if (movie) {
        if (movie.isAvailable) {
          movie.isAvailable = false;
          console.log(`${movie.title} has been rented.`);
        } else {
          console.log(`${movie.title} is not available for rent.`);
        }
      } else {
        console.log(`Movie with title "${title}" not found.`);
      }
    }
  
    returnMovie(title) {
      const movie = this.findMovie(title);
  
      if (movie) {
        if (!movie.isAvailable) {
          movie.isAvailable = true;
          console.log(`${movie.title} has been returned.`);
        } else {
          console.log(`${movie.title} is already available.`);
        }
      } else {
        console.log(`Movie with title "${title}" not found.`);
      }
    }
  
    listMovies() {
      console.log('Movies in the store:');
      this.movies.forEach(movie => {
        console.log(`${movie.title} - ${movie.isAvailable ? 'Available' : 'Rented'}`);
      });
    }
  
    findMovie(title) {
      return this.movies.find(movie => movie.title === title);
    }
  }
  
  // Example Usage
  const movieStore = new MovieStore();
  
  movieStore.addMovie('Inception', 'Sci-Fi', 2010);
  movieStore.addMovie('Learnable struggle', 'Drama', 2024);
  movieStore.addMovie('The Dark Knight', 'Action', 2008);
  
  movieStore.listMovies();
  
  movieStore.rentMovie('The Dark Knight');
  movieStore.rentMovie('Learnable struggle');
  movieStore.rentMovie('The Matrix'); // Movie not found
  
  movieStore.listMovies();
  
  movieStore.returnMovie('The Dark Knight');
  movieStore.returnMovie('Learnable struggle');
  
  movieStore.listMovies();
  