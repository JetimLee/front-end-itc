public class ShapeAreaCalculator {
    public double areaSquare(double side) {
        if (side < 0) {
            System.out.println("Impossible");
            System.exit(0);
        }
        return Math.pow(side, 2);
    }

    public double areaRectangle(double width, double length) {
        if (width < 0 || length < 0) {
            System.out.println("Impossible");
            System.exit(0);
        }
        return width * length;
    }

    public double areaTriangle(double base, double height) {
        if (base < 0 || height < 0) {
            System.out.println("Impossible");
            System.exit(0);
        }
        return (base * height) / 2;
    }

    public double areaCircle(double radius) {
        if (radius < 0) {
            System.out.println("Impossible");
            System.exit(0);
        }
        return Math.PI * Math.pow(radius, 2);
    }

    public static void printAreas(double squareArea, double rectangleArea, double triangleArea, double circleArea) {
        System.out.println("Square area: " + squareArea);
        System.out.println("Rectangle area: " + rectangleArea);
        System.out.println("Triangle area: " + triangleArea);
        System.out.println("Circle area: " + circleArea);

    }

    public static void greeting() {
        System.out.println("Thank you for using the area calculator");
        System.out.println("This calculator lets you get the area of: \n");
        System.out.println("1 -- Square");
        System.out.println("2 -- Rectangle");
        System.out.println("3 -- Triangle");
        System.out.println("4 -- Circle\n");

    }
}
