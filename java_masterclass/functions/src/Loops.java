import java.util.Scanner;

public class Loops {
    public void writeLoops(){
        Scanner myScanner = new Scanner(System.in);
        System.out.println("Hi Bart. I can write lines for you");
        System.out.println("What do you want me to write?");
        String userMessage = myScanner.nextLine();

        for (int i =1; i<100;i++) {
            System.out.println(i+". " + userMessage);
        }
    }
}
