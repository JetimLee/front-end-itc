public class EvenDigitSum {

    public static int getEvenDigitSum (int number){

        if (number <0) return -1;

        int sum = 0;
        int remainder = 0;
        while (number > 0){
            remainder = number % 10;
            sum += (remainder % 2 == 0) ? remainder:0;
            number /= 10;
        }
        return sum;
    }
}