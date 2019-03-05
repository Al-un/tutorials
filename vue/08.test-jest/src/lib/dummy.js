export const func = () => 'some text';

// export class SomeClass {
//   constructor() {
//     this.value = 4;
//   }

//   // moarValue() {
//   //   return this.value + 2;
//   // }
// }

export function SomeClass() {
  this.value = 4;

  /**
   * Some comment
   * @returns {Number} moar value
   */
  this.moarValue = () => {
    return this.value + 2;
  };
}
