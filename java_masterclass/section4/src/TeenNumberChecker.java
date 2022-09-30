public class TeenNumberChecker {
    public static boolean hasTeen(int value1, int value2, int value3) {
        return value1 >= 13 && value1 <= 19 || value2 >= 13 && value2 <= 19 || value3 >= 13 || value3 <= 19 ? true : false;
    }
}
