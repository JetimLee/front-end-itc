const circle = {
  radius: 0,
  set circleRadius(value) {
    this.radius = value;
  },
  get circleRadius() {
    console.log(this.radius);
  },
};
circle.circleRadius = 3;
circle.circleRadius;
