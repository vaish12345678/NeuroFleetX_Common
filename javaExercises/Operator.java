package NeuroFleetX.javaExercises;
public class Operator {
       public static  void arithmeticOperators() {
        int a = 20, b = 10;
        System.out.println("Arithmetic Operators");
        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + (a / b));
        System.out.println("Modulus: " + (a % b));
        System.out.println();

    }

    public static void logicalOperators() {
        boolean a = true, b = false;
        System.out.println("Logical Operators");
        System.out.println("a && b (AND): " + (a && b));
        System.out.println("a || b (OR): " + (a || b));
        System.out.println("!a  " + (!a));
        System.out.println();
    }

    public static void relationalOperators() {
        int x = 15, y = 10;
        System.out.println(" Relational Operators ");
        System.out.println("x == y: " + (x == y));
        System.out.println("x != y: " + (x != y));
        System.out.println("x > y: " + (x > y));
        System.out.println("x < y: " + (x < y));
        System.out.println("x >= y: " + (x >= y));
        System.out.println("x <= y: " + (x <= y));
        System.out.println();
    }
    public static void main(String args[]){
        arithmeticOperators();  
        // logicalOperators();
        // relationalOperators();


    }

}
