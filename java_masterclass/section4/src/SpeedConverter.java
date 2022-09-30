public class SpeedConverter {
    public static long toMilesPerHour(double kilometersPerHour) {
        if (kilometersPerHour < 0) {
            return -1;
        }
        double km = 1.60934;
        double mile = 1;
        long kmInMiles = Math.round(kilometersPerHour / km);
        return kmInMiles;
    }
}
