public class Person {
    private String firstName;
    private String lastName;
    private int age=0;

    public String getFirstName(){
        return firstName;
    }
    public String getLastName(){
        return lastName;
    }
    public int getAge(){
        return age;
    }
    public void setFirstName(String firstName){
        this.firstName=firstName;
    }
    public void setLastName(String lastName){
        this.lastName=lastName;
    }
    public void setAge(int age){
        // if(age<0 || age>100) this.age=0;
        // this.age=age;
        this.age = (age<0 || age>100) ? 0 : age; // ternary operator
    }
    public boolean isTeen(){
        // if(age>12 && age<20) return true;
        // return false;
        return (age>12 && age<20); // ternary operator only in function but doesn't write out the ? true : false;
    }
    public String getFullName(){
        // if(firstName.isEmpty() && lastName.isEmpty()) return "";
        // if(firstName.isEmpty()) return lastName;
        // if(lastName.isEmpty()) return firstName;
        // return firstName + " " + lastName;
        return (firstName.isEmpty() && lastName.isEmpty()) ? "" : (firstName.isEmpty()) ? lastName : (lastName.isEmpty()) ? firstName : firstName + " " + lastName; // ternary operator
    }
}