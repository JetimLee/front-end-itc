import java.util.Arrays;
import java.util.Random;

public class Person {
    private String name;
    private String nationality;
    private String dateOfBirth;
    private String[] passport;

    public void setName(String name) {
        this.name = name;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public void setSeatNumber(int seatNumber) {
        this.seatNumber = seatNumber;
    }
    public void setPassport() {
        this.passport = new String[] {this.name, this.nationality, this.dateOfBirth};
    }

    private int seatNumber;

    public String getName() {
        return name;
    }
    public String[] getPassport() {
        return Arrays.copyOf(this.passport, this.passport.length);
    }

    public String getNationality() {
        return nationality;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public int getSeatNumber() {
        return seatNumber;
    }

    public Person(String initName, String initNationality, String initDOB, int initSeatNumber) {
        this.name = initName;
        this.nationality = initNationality;
        this.dateOfBirth = initDOB;
        this.seatNumber = initSeatNumber;

    }

    public Person(Person p) {
        this.name = p.name;
        this.nationality = p.nationality;
        this.dateOfBirth = p.dateOfBirth;
        this.seatNumber = p.seatNumber;
        this.passport = p.getPassport();
    }

    public boolean applyPassport() {
        Random rand = new Random();
        int randInt = rand.nextInt((1 - 0) + 1) + 0;
        if (randInt == 1) {
            return true;
        }
        return false;
    }

    public void chooseSeat() {
        Random rand = new Random();
        int randInt = rand.nextInt((11 - 1) + 1) + 1;
        this.seatNumber = randInt;
    }

    public String toString() {
        return "Name: " + this.name + "\n"
                +  "Nationality: " + this.nationality + "\n"
                +  "Date of Birth: " + this.dateOfBirth + "\n"
                +  "Seat Number: " + this.seatNumber + "\n"
                +  "Passport: " + Arrays.toString(this.passport) + "\n";
    }
}
