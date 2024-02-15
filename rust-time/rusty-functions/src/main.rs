fn main() {
    first_name();

    last_name();

    show_result(add(3, 2))
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
