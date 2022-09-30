public class Main {
    public static void main(String[] args) {
//        byte myByte = 10;
//        short myShort = 1023;
//        int myInt = 69;
//        long myLong = 50000 + 10 * (myByte + myShort + myInt);
//        System.out.println(myLong);
//        float myFloatValue = (float) 5.25;
//        double amountOfLbs = 1.5;
//        double amountOfKilos = amountOfLbs / 2.205;
//        System.out.println(amountOfKilos);
//        String lastString = "10";
//        int myNewInt = 50;
//        lastString = lastString + myNewInt;
//        System.out.println("LastString is equal to " + lastString);
        double myDouble = 20.00;
        double myOtherDouble = 80.00;
        double result = (myDouble + myOtherDouble) * 100.00;
        double remainder = result % 40.00;
        boolean nothingLeft = remainder == 0 ? true : false;
        System.out.println(nothingLeft);
        if (nothingLeft != true) {
            System.out.println("Got some remainder");
        }
    }
}