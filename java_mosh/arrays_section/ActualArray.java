package arrays_section;

import java.util.Arrays;

public class ActualArray {
    public static void main(String[] args) {
        String[] sentences = { "Hello", "Jackie", "Chan" };
        System.out.println(Arrays.toString(sentences));
        int[] numbers = new int[5];
        numbers[0] = 1;
        numbers[1] = 2;
        System.out.println(Arrays.toString(numbers));
        boolean[] truths = new boolean[10];
        truths[0] = true;
        truths[8] = true;
        System.out.println(Arrays.toString(truths));
    }
}
