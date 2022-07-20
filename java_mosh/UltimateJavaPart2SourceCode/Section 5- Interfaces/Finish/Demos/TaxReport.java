package com.codewithmosh;

public class TaxReport {

  private TaxCalculator calculator;

  public TaxReport(TaxCalculator calculator) {
    this.calculator = calculator;
  }

  public void show(TaxCalculator calculator) {
    var tax = calculator.calculateTax();
    System.out.println(tax);
  }

//  public void setCalculator(TaxCalculator calculator) {
//    this.calculator = calculator;
//  }
}
