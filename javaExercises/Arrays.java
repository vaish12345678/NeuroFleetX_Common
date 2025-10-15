package NeuroFleetX.javaExercises;
public class Arrays {
    public static  void sumOfArray() {
        int[] arr = {1, 2, 3, 4, 5};
        int sum = 0;
        for (int num : arr) {
            sum += num;
        }
        System.out.println(" Program 1: Sum of Array Elements");
        System.out.println("Sum: " + sum);
        System.out.println();
    }

    public static  void maxInArray() {
        int[] arr = {12, 45, 7, 89, 34};
        int max = arr[0];
        for (int num : arr) {
            if (num > max) {
                max = num;
            }
        }
        System.out.println("=== Program 2: Maximum Element in Array ===");
        System.out.println("Maximum: " + max);
        System.out.println();
    }

    public static void reverseArray() {
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println("=== Program 3: Reverse Array ===");
        System.out.print("Original Array: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();

        System.out.print("Reversed Array: ");
        for (int i = arr.length - 1; i >= 0; i--) {
            System.out.print(arr[i] + " ");
        }
       
    }

    public static void main(String args[]){
        // sumOfArray();
        // maxInArray();
        reverseArray();

    }
}
