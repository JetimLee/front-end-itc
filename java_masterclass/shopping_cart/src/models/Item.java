package models;

public class Item {
    private String name;
    private double price;

    public Item(String name, double price) {
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException("Name cannot be null/empty");
        }
        if (price < 0) {
            throw new IllegalArgumentException("Price cannot be negative");
        }
        this.name = name;
        this.price = price;
    }

    /* Pretty important for comparing objects for likeness as the default .equals compares two objects for references which isn't always horribly useful */
    /* Will need to write a custom equals method anytime you deal with a list of objects that need to be checked against each other for one reason or another */
    public boolean equals(Object possibleItem1) {
        if (possibleItem1 == null) {
            return false;
        }
        if (!(possibleItem1 instanceof Item)) {
            return false;
        }
        Item item1 = (Item) possibleItem1;

        return this.name.equalsIgnoreCase(item1.getName());
    }

    public Item(Item i) {
        this.name = i.getName();
        this.price = i.getPrice();
    }

    public String getName() {
        return this.name;
    }

    public double getPrice() {
        return this.price;
    }

    public void setPrice(double price) {
        if (price < 0) {
            throw new IllegalArgumentException("Passed in argument to setPrice was negative");
        }
        this.price = price;
    }

    public void setName(String name) {
        if (name == null || name.isEmpty()) {
            throw new IllegalArgumentException("Name cannot be null/empty");
        }
        this.name = name;
    }

    public String toString() {
        return this.getName() + ":" + " $" + this.getPrice() + "\t";
    }


}
