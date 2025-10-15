package NeuroFleetX.javaExercises;
class first {

    
    public static void primitiveDataTypes() {
        System.out.println("Program 1: Primitive Data Types");
       
        int i = 150000;
        long l = 15000000000L;
        float f = 5.75f;
        double d = 19.99;
        System.out.println("Integer value: " + i);
        System.out.println("Long value: " + l);
        System.out.println("Float value: " + f);
        System.out.println("Double value: " + d);
      
        System.out.println();
    }

   
    public static void typeCastingExample() {
         double num = 99.99;
        int intNum = (int) num; 
        System.out.println(" (double to int): " + intNum);
        System.out.println();
    }

  
    public static void practice() {
       String str= "java programming";
       System.out.println(str);
    }

    public static void main(String[] args) {
        // primitiveDataTypes();
        // practice();
        typeCastingExample();
      
    }
}
