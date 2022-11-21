import models.Car;
import models.Dealership;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        
        Car[] cars = new Car[] {
            new Car("  Ford  ", 5000),
            new Car("   Honda ", 12000),
        };
        cars[1].setMake("  Toyota  ");
        cars[1].setPrice(8500);

        Dealership dealership = new Dealership(cars);

        System.out.println("\n************* JAVA DEALERSHIP *************");
        while (true) {
            System.out.println(dealership);
            System.out.print("Enter the spot number of the car you want to buy: ");
            if(!scan.hasNextInt()){
                scan.nextLine();
                System.out.println("Invalid input");
            }
            int spot = scan.nextInt();
            scan.nextLine();

            if(spot < 0 || spot>dealership.getLength() - 1){
                System.out.println("That spot doesn't exist!");
                continue;
            }else if(dealership.getCar(spot)==null){
                System.out.println("There ain't a car there!");
                continue;
            }

            dealership.sell(spot);
        if(dealership.isEmpty()){
            break;
        }

        }

        System.out.println("Goodbye, the dealership is empty!");

    }
}
