import { Dog } from "./Dog";

export class ShelterDog extends Dog {
  constructor(
    protected name: string,
    protected breed: string,
    protected age: number,
    private shelter: string
  ) {
    super(name, breed, age);
  }
}
