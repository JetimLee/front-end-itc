public class DecimalComparator {

    public static boolean areEqualByThreeDecimalPlaces(double myFirstDouble, double mySecondDouble) {
        int myFirstCheck = (int) (myFirstDouble * 1000);
        int mySecondCheck = (int) (mySecondDouble * 1000);
        if (myFirstCheck - mySecondCheck == 0) {

            return true;
        } else

            return false;

    }


}
