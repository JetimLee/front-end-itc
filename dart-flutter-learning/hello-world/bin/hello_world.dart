import 'package:hello_world/hello_world.dart' as hello_world;

void main(List<String> arguments) {
  print('Hello world: ${hello_world.calculate()}!');
  String name = 'Gavin';
  print("dart is awesome!");
  print('$name is the best guy!');

  String firstName = 'Andrew';
  String lastName = 'Bizzoto';
  int age = 36;
  double height = 1.84;
  print(firstName);
  print(lastName);
  print(age);
  print(height);

  double temperature = 20;
  int value = 2;
  String pizza = 'pizza';
  String pasta = 'pasta';
  print('The temperature is ${temperature}C');
  print("$value plus $value makes ${value + value}");
  print("I like $pizza and $pasta");

  String lovePizza = "I love pizza";
  String lovePasta = lovePizza.replaceAll("pizza", "pasta");
  print(lovePasta);

  int ages = 36;
  String stringAge = ages.toString();
  print(stringAge);
  print(height.toStringAsFixed(1));
  print(double.parse(stringAge));
  print(int.parse(stringAge));

  double tempFarenheit = 90.25;
  double celsius = (tempFarenheit - 32) / 1.8;

  print(
      "${tempFarenheit.toStringAsFixed(1)}F = ${celsius.toStringAsFixed(1)}C");
}
