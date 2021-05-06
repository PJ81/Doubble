
export default class Point {
  x: number;
  y: number
  constructor(_x: number = 0, _y: number = 0) {
    this.x = _x;
    this.y = _y;
  }

  set(_x: number = 0, _y: number = 0) {
    this.x = _x;
    this.y = _y;
  }
}