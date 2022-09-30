public class MegaBytesConverter {
    public static void printMegaBytesAndKiloBytes(int kiloBytes) {
        int originalKB = kiloBytes;
        int megaBytes = kiloBytes / 1024;
        int remainingKiloBytes = kiloBytes % 1024;

        if (kiloBytes < 0) {
            System.out.println("Invalid value");
        } else {
            System.out.println(originalKB + " KB = " + megaBytes + " MB" + " and " + remainingKiloBytes + " KB");
        }
    }
}
