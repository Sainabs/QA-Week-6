const {shuffleArray} = require('./utils')



describe('shuffleArray', () => {
   test("ShuffleArray should return array with same length.", () => {
      const Arr = ['red', 'green','blue'];
         // it('matches even if received contains additional elements', () => {
            expect(shuffleArray(Arr).length).toEqual(Arr.length);
      });
});


describe('shuffleArray', () => {
   test("ShuffleArray should shuffle around items.", () => {
      const Arr = ['red', 'green','blue'];
         // it('matches even if received contains additional elements', () => {
            expect(shuffleArray(Arr)).not.toEqual(Arr);
      });
});

// describe('shuffleArray', () => {
//    test("ShuffleArray should shuffle around items.", () => {
//       const Arr = ['red', 'green','blue'];
//          // it('matches even if received contains additional elements', () => {
//             expect(shuffleArray(Arr)).toEqual(expect.arrayContaining(Arr));
//       });
// });

describe('shuffleArray', () => {
   test("ShuffleArray should return same elements.", () => {
      const Arr = ['red', 'green','blue'];
            expect(Arr).toEqual(expect.arrayContaining(shuffleArray(Arr)));   
         
      });
});

// describe('shuffleArray', () => {
//    test("ShuffleArray should shuffle around items.", () => {
//       const Arr = ['red', 'green','blue'];
//             expect(['red', 'green', 'blue', 'yellow']).toEqual(expect.arrayContaining(shuffleArray(Arr)));   
         
//       });
// });
