public class Airline {
    private Person[] seats;

    public Airline() {
        this.seats = new Person[11];
    }

    public Person getPerson(int index) {
        assert this.seats[index] != null : "Person at this index is null, try a different one";
        return new Person(this.seats[index]);
    }

    public void setPerson(Person p) {
        int pSeat = p.getSeatNumber() - 1;
        assert pSeat < this.seats.length : "This seat cannot be assigned as it doesn't exist in the range";
        this.seats[pSeat] = new Person(p);
    }

    public void createReservation(Person p) {

        Person pToReserveFor = new Person(p);
        int seatNumber = pToReserveFor.getSeatNumber() - 1;
        while (this.seats[seatNumber] != null) {
            System.out.println(pToReserveFor.getName() + ", seat:" + pToReserveFor.getSeatNumber() + " is already taken. Please choose another one. \n");
            pToReserveFor.chooseSeat();
            seatNumber = pToReserveFor.getSeatNumber() - 1;
        }
        this.seats[seatNumber] = pToReserveFor;
        System.out.println("Thank you " + pToReserveFor.getName() + " for flying with Java airlines. Your seat number is " + pToReserveFor.getSeatNumber() + " .\n");

    }

    public String toString() {
        String temp = "";
        for (int i = 0; i < this.seats.length; i++) {
            Person p = this.seats[i];
            if (p != null) {
                temp += p.toString() + "\n";
            } else {
                temp += "Seat " + (i + 1) + " is empty";
                temp += "\n\n";
            }
        }
        return temp;
    }

}
