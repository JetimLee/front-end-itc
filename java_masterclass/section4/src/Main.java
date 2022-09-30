public class Main {
    public static void main(String[] args) {

    }

    public static String getDurationString(long minutes, long seconds) {
        String inValid = "Invalid value";
        if (minutes < 0) {
            System.out.println("Invalid minutes");
            return inValid;
        } else if (seconds < 0 || seconds > 59) {
            System.out.println("Invalid seconds");
            return inValid;
        }
        long hours = minutes / 60;
        long remainingMinutes = minutes % 60;
        return hours +"h " + remainingMinutes +"m " +seconds +"s";

    }
    public static String getDurationString(long seconds) {
        String inValid = "Invalid value";
        if(seconds < 0) {
            return inValid;
        }
        long minutes = seconds / 60;
        long secondsRemaining = seconds % 60;
        return getDurationString(minutes,secondsRemaining);

    }

    public static double calcFeetAndInchesToCentimeters(double feet, double inches) {
        if (feet < 0) {
            System.out.println("Invalid feet");
            return -1;
        } else if ((inches < 0) || (inches > 12)) {
            System.out.println("Invalid inches");
            return -1;
        }
        double centimeters = (feet * 12) * 2.54;
        centimeters += inches * 2.54;

        return centimeters;
    }

    public static double calcFeetAndInchesToCentimeters(double inches) {
        if (inches < 0) {
            return -1;
        }
        double inchesToFeet = (int) inches / 12;
        double remainingInches = (int) inches % 12;
        return calcFeetAndInchesToCentimeters(inchesToFeet, remainingInches);
    }
}