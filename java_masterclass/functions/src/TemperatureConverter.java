public class TemperatureConverter {
    public double convertToCelsius(double temperatureInF) {
        return (temperatureInF - 32) * 5/9;
    }
   /**
    * @param temperatureInF (double) */
    public void printTemperatures(double temperatureInF) {
        System.out.println("F: " + temperatureInF);
        double tempInCelsius = convertToCelsius(temperatureInF);
        System.out.println("C: " + tempInCelsius + "\n");
    }
}
