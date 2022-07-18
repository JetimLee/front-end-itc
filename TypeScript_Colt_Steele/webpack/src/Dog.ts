export class Dog {
  constructor(
    protected readonly name: string,
    protected breed: string,
    protected age: number
  ) {}
  bark() {
    console.log(this.name);
  }
}
