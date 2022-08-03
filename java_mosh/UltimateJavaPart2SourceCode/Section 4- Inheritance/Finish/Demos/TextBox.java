package com.codewithmosh;

public class TextBox extends UIControl {
  private String text = "";

//  public TextBox() {
//    super(true);
//  }


  @Override
  public void render() {
    System.out.println("Render TextBox");
  }

  @Override
  public String toString() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }

  public void clear() {
    text = "";
  }
}
