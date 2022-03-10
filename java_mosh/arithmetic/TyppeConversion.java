package arithmetic;

import java.util.Scanner;

public class TyppeConversion {
    public static void main(String[] args) {
        // implicit casting - happens whenever a smaller type can be converted into a
        // larger one
        short x = 1;
        int y = x + 2;
        double z = 10.1;
        int g = (int) z + 3;
        System.out.println(y);
        System.out.println(g);
        String somethingElse = "1";
        int convertedString = Integer.parseInt(somethingElse);
        System.out.println(convertedString);
        Scanner scanner = new Scanner(System.in);
        Scanner scanner2 = new Scanner(System.in);
        System.out.print("Name: ");
        String name = scanner2.nextLine();
        System.out.print("Age: ");
        byte age = scanner.nextByte();
        scanner.close();
        scanner2.close();
        System.out.println("You are " + name + " and you are " + age + " years old");
    }
}
