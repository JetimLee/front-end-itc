public class LeapYear {
    public static boolean isLeapYear(int year) {
        if (year >= 1 == false || year <= 9999 == false) {
            return false;
        }
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 == 0) {
                    return true;
                }
            } else {
                return true;
            }
        }
        return false;
    }
}
