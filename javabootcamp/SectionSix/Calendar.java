package SectionSix;

public class Calendar {
    public static void main(String[] args) {
        String day = "kkkks";
        System.out.println("Hey, are you free on " + day + "? \n");

        System.out.println("Hmm, let me check my calendar.");

        switch (day.toLowerCase()) {
            case "monday":
                System.out.println("Sorry, I have to stay at work late.");
                break;
            case "tuesday":
                System.out.println("It looks like I have meetings all day.");
                break;
            case "wednesday":
                System.out.println("I have a dentist appointment. Some other time!");
                break;
            case "thursday":
                System.out.println("Sorry " + day + " is date night!");
                break;
            case "friday":
                System.out.println("I'm free!");
                break;
            case "saturday":
                System.out.println("I'm free!");
                break;
            case "sunday":
                System.out.println("I'm free!");
                break;
            default:
                System.out.println(day + " isn't a day");
        }
    }
}
