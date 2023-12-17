enum Operation { plus, minus, multiply, divide }

void main() {
  int netSalary = 2000;
  int expenses = 1000;

  if (netSalary > expenses) {
    print("You have saved \$${netSalary - expenses} this month");
  } else if (expenses > netSalary) {
    print("You have lost \$${expenses - netSalary} this month");
  } else {
    print("Your balance hasn't changed");
  }

  for (var i = 1; i < 16; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      print('fizz buzz');
    } else if (i % 3 == 0) {
      print('fizz');
    } else if (i % 5 == 0) {
      print('buzz');
    } else {
      print(i);
    }
    ;
  }

  const a = 6;
  const b = 3;
  const op = Operation.divide;
  switch (op) {
    case Operation.plus:
      print("${a} + ${b} = ${a + b}");
      break;
    case Operation.minus:
      print("${a} - ${b} = ${a - b}");
      break;
    case Operation.divide:
      print("${a} / ${b} = ${(a / b).toStringAsFixed(0)}");
      break;
    case Operation.multiply:
      print("${a} * ${b} = ${a * b}");
  }
}
