package models;

public class Movie {
    private String name;
    private String format;
    private double rating;
    private double sellingPrice;
    private double rentalPrice;
    private boolean isAvailable;

    public Movie(String initName, String initFormat, double initRating) {
        if (initName == null || initName.isBlank()) {
            throw new IllegalArgumentException("An invalid name value was passed to the movie constructor");
        }
        if(!(initFormat.equalsIgnoreCase("DVD") || initFormat.equalsIgnoreCase("Blue-Ray"))){
            throw new IllegalArgumentException("An invalid media format was passed to the movie constructor");
        }
        if (initRating < 0 || initRating > 10) {
            throw new IllegalArgumentException("Rating cannot be less than 0 or greater than 10");
        }
        this.name = initName;
        this.format = initFormat;
        this.rating = initRating;
        this.isAvailable = true;
        this.sellingPrice = initFormat.equals("Blue-Ray") ? 4.25 : 2.25;
        this.rentalPrice = initFormat.equals("Blue-Ray") ? 1.99 : .99;
    }

    public Movie(Movie m) {
        this.name = m.getName();
        this.format = m.getFormat();
        this.rating = m.getRating();
        this.isAvailable = m.isAvailable();
        this.sellingPrice = m.getFormat().equals("Blue-Ray") ? 4.25 : 2.25;
        this.rentalPrice = m.getFormat().equals("Blue-Ray") ? 1.99 : .99;
    }

    public String toString() {
        return "\t Name: " + this.getName() + "\n" + "\t Format: " + this.getFormat() + "\n"
                + "\t Rating: " + this.getRating() + "\n" + "\t Selling Price: " + this.getSellingPrice() +
                "\n" + "\t Rental Price: " + this.getRentalPrice() + "\n" + "\t Availability: " +
                (this.isAvailable() ? "in-stock" : "rented") + "\n";
    }

    public void setName(String name) {
        if(name == null || name.isBlank()){
            throw new IllegalArgumentException("An invalid argument was passed to setName");
        }
        this.name = name;
    }

    public void setFormat(String format) {
        if(format == null || format.isBlank()){
            throw new IllegalArgumentException("A null or blank value was given to set format");
        }
        if(format.equalsIgnoreCase("DVD") == false && format.equalsIgnoreCase("Blue-Ray") == false){
            throw new IllegalArgumentException("An invalid media format was passed to the movie constructor");
        }        this.format = format;
        setSellingPrice(format.equals("Blue-Ray") ? 4.25 : 2.25);
        setRentalPrice(format.equals("DVD") ? 1.99 : .99);
    }

    public void setRating(double rating) {
        if (rating < 0 || rating > 10) {
            throw new IllegalArgumentException("Rating cannot be less than 0 or greater than 10");
        }
        this.rating = rating;
    }

    public void setSellingPrice(double sellingPrice) {
        this.sellingPrice = sellingPrice;
    }

    private void setRentalPrice(double rentalPrice) {
        this.rentalPrice = rentalPrice;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }

    public String getName() {
        return name;
    }

    public String getFormat() {
        return format;
    }

    public double getRating() {
        return rating;
    }

    private double getSellingPrice() {
        return sellingPrice;
    }

    public double getRentalPrice() {
        return rentalPrice;
    }

    public boolean isAvailable() {
        return isAvailable;
    }
}
