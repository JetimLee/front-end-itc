import models.Movie;
import models.Store;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Main {
    static Store movieStore = new Store();

    public static void main(String[] args) {
        System.out.println("\n********************JAVA VIDEO STORE********************\n");
        try {
            loadMovies("src/movies.txt");
            System.out.println("MOVIES LOADED\n\n");
            System.out.println(movieStore);
            manageMovies();
        } catch (RuntimeException e) {
            System.out.println(e.getMessage());
        }


    }

    /**
     * Name: manageMovies
     * Inside the function:
     *   • 1. Starts a new instance of Scanner;
     *   • 2. In an infinite loop, the user can choose to a) purchase b) rent c) return d) exit.
     *   •        case a: ask for the name and sell.
     *   •        case b: ask for the name and rent.
     *   •        case c: ask for the name and return.
     *   • 3. call close() from the Scanner object.
     */


    /**
     * Name: loadMovies
     *
     * @param fileName (String)
     * @throws FileNotFoundException Inside the function:
     *                               • 1. loads movies from <fileName>.txt.
     *                               • 2. adds all movies to the store object's movie field.
     *                               Hint: You will need to 'split' a String into three Strings.
     */
    public static void loadMovies(String fileName) {
        try {
            FileInputStream fis = new FileInputStream(fileName);
            Scanner myScanner = new Scanner(fis);
            while (myScanner.hasNextLine()) {
                String[] mediaContents = myScanner.nextLine().split("--");
                String mediaName = mediaContents[0];
                String mediaFormat = mediaContents[1];
                double mediaRating = Double.parseDouble(mediaContents[2]);
                Movie newMovie = new Movie(mediaName, mediaFormat, mediaRating);
                movieStore.addMovie(newMovie);

//                System.out.println(Arrays.toString(mediaContents));
            }
            myScanner.close();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    public static void manageMovies() {
        Scanner myScanner = new Scanner(System.in);
        while (true) {
            System.out.println("\nWould you like to \n\ta) purchase\n\tb) rent \n\tc) return \n\td) exit.");
            String userChoice = myScanner.nextLine();
            if (userChoice.equalsIgnoreCase("D")) {
                System.out.println("Goodbye!");
                break;
            }
            System.out.println("What is the name of the movie?");
            String movieName = myScanner.nextLine();
            if (movieStore.getMovie(movieName) == null) {
                System.out.println("\n\nThe input you provided is not valid. Please try again\n");
                continue;
            }
            switch (userChoice.toUpperCase()) {
                case "A":
                    if (!(movieStore.getMovie(movieName).isAvailable())) {
                        System.out.println("\n\nThat movie isn't currently available, please try another one!\n");
                        continue;
                    }
                    movieStore.action(movieName, "SELL");
                    System.out.println("\n\nUPDATED MOVIES\n\n");
                    System.out.println(movieStore);
                    break;
                case "B":
                    if (!(movieStore.getMovie(movieName).isAvailable())) {
                        System.out.println("\n\nThat movie isn't currently available, please try another one!\n");
                        continue;
                    }
                    movieStore.action(movieName, "RENT");
                    System.out.println("\n\nUPDATED MOVIES\n\n");
                    System.out.println(movieStore);
                    break;
                case "C":
                    movieStore.action(movieName, "RETURN");
                    System.out.println("\n\nUPDATED MOVIES\n\n");
                    System.out.println(movieStore);
                    break;
                default:
                    System.out.println("An invalid selection was made, please try again");
            }
            System.out.println("\n\n UPDATED MOVIES \n\n" + movieStore);
        }
    }
}
