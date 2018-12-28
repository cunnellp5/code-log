// 
// ohn wants to decorate a room with wallpaper. He has been said that making sure
// he has the right amount of wallpaper is more complex than it sounds. He wants a
// fool-proof method to getting it right.
//
// John knows that the rectangular room has a length of l meters, a width of w
// meters, a height of h meters. The standard width of the rolls he wants to buy
// is 52 centimeters. The length of a roll is 10 meters. He bears in mind however,
//  that it’s best to have an extra length of wallpaper handy in case of mistakes
//   or miscalculations so he wants to buy a length 15% greater than the one he
//    needs.
//
// Last time he did these calculations he caught a headache so could you help
// John? Your function wallpaper(l, w, h) should return as a plain English word
//  in lower case the number of rolls he must buy.
//
// #Example: wallpaper(4, 3.5, 3) should return "ten"
//
// #Notes:
//
// all rolls (even with incomplete width) are put edge to edge
// 0 <= l, w, h (floating numbers), it can happens that w x h x l is zero
// the integer r (number of rolls) will always be less or equal to 20
//
//


export class G964 {
    public static wallpaper(l: number, w: number, h: number): string {
      let numbObj = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',

      }
      let northSouth = 2 * ( l * h );
      let eastWest = 2 * ( w * h );
      let wallPaper = (northSout + eastWest) / (5.2);
      let result = wallPaper + (wallPaper * .15);
      let round = Math.round(result);
      return round
    }
}
