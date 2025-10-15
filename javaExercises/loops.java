package NeuroFleetX.javaExercises;
public class loops {
     public static void forLoopExample() {
        System.out.println("Program 1: For Loop");
        for (int i = 1; i <= 10; i++) {
            System.out.print(i + " ");
        }
        System.out.println("\n");
    }
     public static void whileLoopExample() {
        System.out.println("=== Program 2: While Loop ===");
        int i = 1, sum = 0;
        while (i <= 5) {
            sum += i;
            i++;
        }
        System.out.println("Sum of numbers from 1 to 5: " + sum);
        System.out.println();
    }

      public static void doWhileLoopExample() {
        System.out.println("Program 3: Do-While Loop");
        int i = 1;
        do {
            System.out.print(i + " ");
            i++;
        } while (i <= 5);
        System.out.println("\n");
    }




    public static  void main(String args[]){
        // forLoopExample();
        // whileLoopExample();
        doWhileLoopExample();

    }
    
}
