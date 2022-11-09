import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[][] matrix = new int[][]{
                {1, 2, 3},
                {8, 6, 4},
                {2, 4, 6}
        };
        //issue with this is assuming all arrays are going to be the same inside of the 2d array, but that is a safe assumption when dealing with triangles
//        for (int i = 0; i < matrix.length; i++) {
//            for (int j = 0; j <= i; j++) {
//                if (j < i) {
//                    matrix[j][i] = 0;
//                }
//            }
//        }
        //cleaner, more readable, achieves same results. Can also be used with arrays that are larger on the inside than the first array
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (j > i) {
                    matrix[i][j] = 0;
                }
            }
        }

        System.out.println();
        printMatrix(matrix);
    }

    public static void printMatrix(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            System.out.println(Arrays.toString(matrix[i]));
        }
    }
}
