package models;

import java.text.DecimalFormat;
import java.util.ArrayList;

public class Cart {

    private ArrayList<Item> items = new ArrayList<Item>();

    public Cart() {
        this.items = new ArrayList<Item>();
    }

    /**
     * Name: add
     *
     * @param i
     * @return boolean
     * <p>
     * Inside the function:
     * 1. Adds an item to the cart if it wasn't already added.
     */

    public boolean add(Item i) {
        /* .contains only checks for the same reference to the same item, but if a new item with the same properties is passed then it will give a false report */
        boolean wasAdded = this.items.contains(i);
        if (!wasAdded) {
            this.items.add(i);
        }
        return wasAdded;
    }

    public Item getItem(int index) {
        return new Item(this.items.get(index));
    }

    public void setItem(int index, Item i) {
        this.items.set(index, new Item(i));
    }

    /**
     * Name: remove
     *
     * @param name Inside the function:
     *             1. Removes the item that matches the name passed in.
     */
    public void remove(String name) {
        if (this.items.isEmpty()) {
            throw new IllegalStateException("There aren't any items in the cart!");
        }
        for (int i = 0; i < this.items.size(); i++) {
            if (this.items.get(i).getName().equalsIgnoreCase(name)) {
                this.items.remove(i);
            }
        }

    }

    /**
     * Name: checkout
     *
     * @return (String)
     * <p>
     * Inside the function:
     * 1. Calculates the subtotal (price before tax).
     * 2. Calculates the tax (assume tax is 13%).
     * 3. Calculates total: subtotal + tax
     * 4. Returns a String that resembles a receipt. See below.
     */

    public String checkout() {
        if (this.items.isEmpty()) {
            throw new IllegalStateException("There aren't any items in the cart!");
        }
        final DecimalFormat df = new DecimalFormat("0.00");
        double subtotal = 0;
        for (Item i : this.items) {
            subtotal += i.getPrice();
        }
        double tax = (.13 * subtotal);
        double total = tax + subtotal;

        String receipt = "";
        receipt += "\tReceipt\n\n";
        receipt += "\tSubtotal: $" + subtotal + "\n";
        receipt += "\tTax: $" + df.format(tax) + "\n";
        receipt += "\tTotal: $" + df.format(total) + "\n";
        return receipt;
    }

    public String toString() {
        String temp = "";
        for (Item i : this.items) {
            temp += i.toString();
            temp += "\n";
        }
        return temp;
    }

}
