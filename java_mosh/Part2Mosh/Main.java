package Part2Mosh;

import Part2Mosh.TextBox.TextBox;

public class Main {
    public static void main(String[] args) {
        var textBox1 = new TextBox();
        textBox1.setText("box 1");
        System.out.println(textBox1.text);
        var textBox2 = textBox1;
        System.out.println(textBox2);
        textBox2.setText("Hello World");
        System.out.println(textBox1.text);

    }
}
