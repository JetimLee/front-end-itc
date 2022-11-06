public class Item {
    private String name;
    private double price;
    private int quantity;

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Item(String initName, double initPrice, int initQuantity) {
        assert initName.length() > 0;
        assert initPrice > 0;
        assert initQuantity > 0;
        this.name = initName;
        this.price = initPrice;
        this.quantity = initQuantity;
    }

    public Item(Item i) {
        this.quantity = i.quantity;
        this.price = i.price;
        this.name = i.name;
    }

    public String toString() {
        return this.name + ": " + this.price + " " + "(" + this.quantity + ")";
    }
}
