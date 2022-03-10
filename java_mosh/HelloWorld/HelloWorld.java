package HelloWorld;

import java.util.Date;

public class HelloWorld {
    public static void main(String[] args) {
        byte age = 30;
        long viewsCount = 900000000000L;
        double price = 10.99;
        Date now = new Date();
        System.out.println("Hello, World " + age);
        System.out.println("This video has been watched over " + viewsCount + " times!");
        System.out.println("The price is $" + price);
        System.out.println("The date is " + now);
        String message = "  Hello World";
        String trimmedMessage = message.trim();
        System.out.println(message);
        System.out.println(trimmedMessage);
        System.out.println(message.length());
        System.out.println(message.indexOf('W'));
    }
}
