package models;

public class Car {
    private String make;
    private double price;

    public Car(String make, double price) {
        if(make == null || make.isBlank() || price < 0){
            throw new IllegalArgumentException("Make of the car cannot be blank or the price cannot be less than 0");
        }
        this.make = make;
        this.price = price;
    }

    public Car(Car source) { 
            this.make = source.make;
            this.price = source.price;    
    }
    public String getMake() {
        return this.make;
    }

    public double getPrice() {
        return this.price;
    }

    public void setMake(String make) {
        if(make == null || make.isBlank()){
            throw new IllegalArgumentException("Make cannot be null or blank");
        }
        this.make = make;
    }

    public void setPrice(double price) {
        if(price < 0){
            throw new IllegalArgumentException("Price cannot be less than zero");
        }
        this.price = price;
    }

    public void drive() {
        System.out.println("\nYou bought the beautiful " + this.make + " for " + this.price + ".");
        System.out.println("Please drive your car to the nearest exit.\n");
    }

    public String toString() {
        return "\tMake: " + this.make + ".\n" 
            +  "\tPrice: " + this.price + ".\n";
    }

}
