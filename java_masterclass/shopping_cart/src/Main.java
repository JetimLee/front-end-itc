import models.Cart;
import models.Item;

public class Main {


    public static void main(String[] args) {
        Item i1 = new Item("Celery", 0.99);
        Item i4  = new Item(i1);
        Item i2 = new Item("Spinach", 0.99);
        Item i3 = new Item("Coriander", 1.29);

        Cart myCart = new Cart();
        myCart.add(i1);
        myCart.add(i4);
        myCart.add(i2);
        myCart.add(i3);

        System.out.println(myCart);
        System.out.println(myCart.checkout());
    }

    /**
     * Name: manageItems
     * Inside the function:
     *   • 1. Starts a new instance of Scanner;
     *   • 2. Creates an infinite loop:     
     *   •        The user can choose to a) add or b) remove c) checkout.
     *   •          case a: asks for the aisle and item number. Then, adds item to cart.
     *   •          case b: asks for the name. Then, removes item from cart.
     *   •          case c: prints the receipt and closes Scanner.
     *   •        Prints the updated shopping cart.
     */


    /**
     * Name: loadItems
     * @param fileName (String)
     * @throws FileNotFoundException
     *
     * Inside the function:
     *   1. loads items from <fileName>.txt.
     *      • while loop runs through every line in <fileName>
     *      • scan.nextLine() picks up the entire line.
     *      • splits each String using the ";" separator.
     *      • splits both fields in each String using the "=" separator.
     *      • Parse each price into a Double.
     *   2. adds all items to the store object's items field.
     */

}
