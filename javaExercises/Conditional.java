package NeuroFleetX.javaExercises;
public class Conditional {
     public static  void ifElseExample() {
        int number = 10;
        System.out.println(" If-Else Condition");
        if (number % 2 == 0) {
            System.out.println(number + " is even");
        } else {
            System.out.println(number + " is odd");
        }
        System.out.println();
    }

     public static void nestedIfExample() {
        int marks = 85;
        System.out.println("Nested If Condition");
        if (marks >= 90) {
            System.out.println("Grade: A+");
        } else if (marks >= 75) {
            System.out.println("Grade: A");
        } else if (marks >= 60) {
            System.out.println("Grade: B");
        } else {
            System.out.println("Grade: C");
        }
        System.out.println();
    }

   public static  void largestOfThree() {
    int a = 25, b = 40, c = 30;
    System.out.println("Largest of Three Numbers");

    if (a > b && a > c) {
        System.out.println(a + " is the largest number");
    } else if (b > a && b > c) {
        System.out.println(b + " is the largest number");
    } else {
        System.out.println(c + " is the largest number");
    }
    System.out.println();
}

    public static void main(String args[]){
        // ifElseExample();
        // nestedIfExample();
        largestOfThree();


    }

    
}
