package models;

import java.util.ArrayList;

public class Store {
    private ArrayList<Movie> movies;

    public Store() {
        this.movies = new ArrayList<Movie>();
    }

    public Movie getMovie(int index) {
        if (index < 0 || index >= this.movies.size()) {
            throw new IllegalArgumentException("The passed in index to getMovie cannot be less than 0 and cannot be greater than or " +
                    "equal to the amount of movies available");
        }
        return new Movie(this.movies.get(index));
    }

    public Movie getMovie(String movieName) {
        if (movieName == null || movieName.isBlank()) {
            throw new IllegalArgumentException("An invalid argument was sent into getMovie with a movie string param.");
        }
        for (Movie m : this.movies) {
            if (m.getName().equalsIgnoreCase(movieName)) return new Movie(m);
        }
        return null;

    }

    public void setMovie(int index, Movie m) {
        if (index < 0 || index >= this.movies.size()) {
            throw new IllegalArgumentException("The passed in index to setMovie cannot be less than 0 and cannot be greater than or " +
                    "equal to the amount of movies available");
        }
        this.movies.add(index, new Movie(m));
    }

    public void addMovie(Movie m) {
        this.movies.add(new Movie(m));
    }

    private void sellMovie(String movieName) {
        for (int i = 0; i < this.movies.size(); i++) {
            if (this.movies.get(i).isAvailable() == false) {
                throw new IllegalStateException("That movie is out for rent and cannot be sold at this time");
            }
            if (this.movies.get(i).getName().equalsIgnoreCase(movieName)) {
                this.movies.remove(i);
            }
        }
    }

    private void returnMovie(String movieName) {
        for (Movie m : this.movies) {
            if (m.getName().equalsIgnoreCase(movieName)) {
                m.setAvailable(true);
            }
        }
    }

    private void rentMovie(String movieName) {
        for (Movie m : this.movies) {
            if (m.getName().equalsIgnoreCase(movieName)) {
                m.setAvailable(false);
            }
        }
    }

    public void action(String movieName, String action) {
        if (this.movies.isEmpty()) {
            throw new IllegalStateException("There are no movies to perform any actions with");
        }
        if (movieName == null || movieName.isBlank()) {
            throw new IllegalArgumentException("An invalid name argument was passed into action");
        }
        switch (action.toUpperCase()) {
            case "SELL":
                this.sellMovie(movieName);
                break;
            case "RETURN":
                this.returnMovie(movieName);
                break;
            case "RENT":

                this.rentMovie(movieName);
                break;
            default:
                throw new IllegalArgumentException("An invalid action argument was passed into action");
        }
    }

    public String toString() {
        String temp = "";
        for (Movie m : this.movies) {
            temp += m.toString();
            temp += "\n\n";
        }
        return temp;
    }
}
