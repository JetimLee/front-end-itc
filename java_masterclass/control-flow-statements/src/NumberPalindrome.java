public class NumberPalindrome
{
    public static boolean isPalindrome(int number)
    {
        if (number < 0)
        {
            number *= -1;
        }

        int reverse = 0;
        int stored = number;
        while (stored > 0)
        {
            // extract the lest-significant digit
            int digit = stored % 10;
            System.out.println(digit);
            System.out.println("digit");
            reverse = (reverse * 10) + digit;
            System.out.println(reverse);
            System.out.println("reverse");
            // drop the least-significant digit
            stored /= 10;   // same as number = number / 10;
            System.out.println(stored);
            System.out.println("stored now");
        }

        if (number == reverse)
        {
            return true;
        } else
        {
            return false;
        }

    }

}