public class MinutesToYearsDaysCalculator {

    public static void printYearsAndDays(long minutes) {
        if (minutes < 0) {
            System.out.println("Invalid Value");
        } else {
            //gives you the years
            long years = minutes / 525600;
            //gives you remainder after how many years, IE how many days, then divides that amount of minutes by 1440 which is the amount of minutes in a day=;
            long days = (minutes % 525600) / 1440;


            System.out.println(minutes + " min = " + years + " y and " + days + " d");
        }
    }
}