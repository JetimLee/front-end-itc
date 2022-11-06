public class VendingMachine {

    //initialize any values inside constructor
    private Item[][] items;

    public VendingMachine(Item[][] items) {
        this.items = new Item[items.length][items[0].length];
        for (int i = 0; i < this.items.length; i++) {
            for (int j = 0; j < this.items[i].length; j++) {
                this.items[i][j] = new Item(items[i][j]);
            }
        }
    }

    public Item getItem(int row, int spot) {
        assert row < this.items.length;
        assert spot < this.items[row].length;
        return this.items[row][spot];
    }

    public void setItem(Item item, int row, int spot) {
        assert row < this.items.length;
        assert spot < this.items[row].length;
        this.items[row][spot] = new Item(item);
    }

    public boolean dispense(int row, int spot) {
        assert row < this.items.length;
        assert spot < this.items[row].length;
        if (this.items[row][spot].getQuantity() > 0) {
            this.items[row][spot].setQuantity(this.items[row][spot].getQuantity() - 1);
            return true;
        }
        return false;
    }

    public String toString() {
        String temp = "";
        for (int i = 0; i < this.items.length; i++) {
            for (int j = 0; j < this.items[i].length; j++){
                if (this.items[i][j] == null) {
                    continue;
                } else {
                    temp += "\t" + this.items[i][j].toString();
                }
            }
            temp += "\n\n";
        }
        temp += "\t************************************************";

        return temp;
    }
}
