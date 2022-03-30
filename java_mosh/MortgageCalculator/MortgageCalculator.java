package MortgageCalculator;

import java.util.Scanner;

public class MortgageCalculator {
    public static void main(String[] args) {
        Scanner principal = new Scanner(System.in);
        Scanner annualInterestRate = new Scanner(System.in);
        Scanner period = new Scanner(System.in);
        System.out.print("Principal: ");
        String inputtedPrincipal = principal.next();
        System.out.print("Annual Interest Rate: ");

        String inputtedAnnualInterestRate = annualInterestRate.next();
        System.out.print("Period (Years)");

        String inputtedPeriod = period.next();

        double inputtedPeriodAsNumber = Float.parseFloat(inputtedPeriod);
        double inputtedPrincipalAsNumber = Float.parseFloat(inputtedPrincipal);
        double inputtedAnnualInterestRateAsNumber = Float.parseFloat(inputtedAnnualInterestRate);
        double mortgagePercentage = inputtedAnnualInterestRateAsNumber / 100;
        double mortgagePayment = inputtedPrincipalAsNumber * (mortgagePercentage
                * (Math.pow(1 + mortgagePercentage, (inputtedPeriodAsNumber * 12))))
                / (Math.pow(1 + mortgagePercentage, (inputtedPeriodAsNumber * 12))) - 1;

        System.out.println(mortgagePayment);
        principal.close();
        annualInterestRate.close();
        period.close();

    }
}
