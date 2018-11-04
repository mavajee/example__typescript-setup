console.log('HELLO WORLD MAN;');
console.log('You are my father boy;');

// const asd = () => {
//   console.log('WARNOTN');
//   return '324234'
// }

// asd();

// class Point {
//   constructor(public x, public y) {
//     console.log('asdas')
//   }
//   getDistance(p: Point) {
//       let dx = p.x - this.x;
//       let dy = p.y - this.y;
//       return Math.sqrt(dx ** 2 + dy ** 2);
//   }
// }
// // ...

// // Reopen the interface.
// interface Point {
//   distanceFromOrigin(point: Point): number;
// }
// Point.prototype.distanceFromOrigin = function(point: Point) {
//   return this.getDistance({ x: 0, y: 0});
// }

// const p = new Point(1,2);

const test = (): Number => {
  let b:Number = 123;
  b = 123123;
  b = 12325;
  console.log(b);

  return 123123
}

console.log(test())
