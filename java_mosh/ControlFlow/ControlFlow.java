package ControlFlow;

public class ControlFlow {
    public static void main(String[] args) {
        // int x = 1;
        // int y = 2;
        // System.out.println(x == y);
        // int temperature = 22;
        // boolean isWarm = temperature > 20 && temperature < 30;
        // System.out.println(isWarm);
        // int temp = 19;
        // if (temp >= 30) {
        // System.out.println("It's a hot day \n Drink plenty of water");
        // } else if (temp > 20 && temp < 30) {
        // System.out.println("It's a nice day");
        // } else {
        // System.out.println("It's cold");
        // }

        // int income = 90_000;
        // String className = income > 100_000 ? "First class" : "Coach";
        // System.out.println(className);

        String role = "moderator";
        switch (role) {
            case "admin":
                System.out.println("You're an admin");
                break;
            case "moderator":
                System.out.println("You're a moderator");
                break;
            default:
                System.out.println("You're a guest");
        }
    }
}