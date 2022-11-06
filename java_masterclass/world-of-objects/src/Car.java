public class Car {
    String make;
    double price;
    int year;
    String color;
    String[] parts;

    public Car(String initMake, double initPrice, int initYear, String initColor,String[] initParts) {
        this.make = initMake;
        this.price = initPrice;
        this.year = initYear;
        this.color = initColor;
        this.parts = initParts;
    }
}
