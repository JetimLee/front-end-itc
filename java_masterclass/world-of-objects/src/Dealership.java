import java.util.Arrays;

public class Dealership {
    private Car[] cars;

    public void setCars(Car car, int index) {
        assert index < this.cars.length : "Index cannot be greater than the length of the cars array";
        this.cars[index] = car;
    }

    public Car getCar(int index) {
        assert index < this.cars.length : "Index cannot be greater than the length of the cars array";
        return this.cars[index];
    }

    public Dealership() {
        this.cars = new Car[3];
        System.out.println(Arrays.toString(this.cars));


    }
}
