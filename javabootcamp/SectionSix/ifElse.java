package SectionSix;

public class ifElse {
    public static void main(String[] args) {
        double wallet = 100;
        double toyCar = 5.99;
        double nike = 95.99;
        System.out.print("Can I get this car?");
        if (wallet - toyCar >= 0) {
            System.out.println("\nSure!");
            wallet -= toyCar;
        } else {
            System.out.println("\nSorry, I only have " + wallet);
        }
        System.out.println("Can I get these nike shoes?");
        if (wallet - nike >= 0) {
            System.out.println("\nSure!");
            wallet -= nike;
        } else {
            System.out.println("Sorry, I only have " + wallet);
        }
    }
}
