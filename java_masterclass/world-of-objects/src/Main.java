public class Main {
    public static void main(String[] args) {
        Person myPerson = new Person("Rayan Slim", "Canadian", "01/01/1111",6);
        myPerson.chooseSeat();
        System.out.println(myPerson.getName());
        System.out.println(myPerson.getNationality());
        System.out.println(myPerson.getDateOfBirth());
        System.out.println(myPerson.getSeatNumber());
        boolean applied = myPerson.applyPassport();
        if(applied){
            System.out.println("Congratulations! " + myPerson.getName() +". Your passport was approved!") ;
        }else {
            System.out.println("We're sorry " + myPerson.getName() +". We cannot process your application.");
        }


    }
}