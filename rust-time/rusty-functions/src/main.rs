fn main() {
    first_name();

    last_name();

    show_result(add(3, 2));
    say_something(true);
}

fn first_name() {
    println!("Gavin!");
}

fn last_name() {
    println!("Coulson!")
}

fn add(a: i32, b: i32) -> i32 {
    a + b
}
fn show_result(x: i32) {
    println!("{:?}", x);
}

fn say_something(say_hello: bool) {
    if say_hello {
        print!("Hello!")
    } else {
        print!("Goodbye!")
    }
}
