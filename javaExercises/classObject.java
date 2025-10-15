package NeuroFleetX.javaExercises;

class classObject {

   
    void simpleClassObject() {
        System.out.println("Program 1: Simple Class and Object");
      
        class Student {
            String name;
            int age;
        }

    
        Student s1 = new Student();
        s1.name = "Alice";
        s1.age = 20;

        System.out.println("Name: " + s1.name);
        System.out.println("Age: " + s1.age);
        System.out.println();
    }

  
    void parameterizedConstructor() {
        System.out.println("Program 2: Parameterized Constructor");

        class Student {
            String name;
            int age;

           
            Student(String n, int a) {
                name = n;
                age = a;
            }

            void display() {
                System.out.println("Name: " + name);
                System.out.println("Age: " + age);
            }
        }

       
        Student s1 = new Student("Bob", 22);
        Student s2 = new Student("Charlie", 19);

        s1.display();
        s2.display();
        System.out.println();
    }

   
    void defaultConstructor() {
        System.out.println(" Program 3: Default Constructor with Methods");

        class Car {
            String model;
            int year;

           
            Car() {
                model = "Unknown";
                year = 2025;
            }

            void showDetails() {
                System.out.println("Model: " + model);
                System.out.println("Year: " + year);
            }
        }

        Car car1 = new Car();
        car1.showDetails();
        System.out.println();
    }

    public static void main(String[] args) {
        classObject coc = new classObject();
        coc.simpleClassObject();
        coc.parameterizedConstructor();
        coc.defaultConstructor();
    }
}
