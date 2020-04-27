/**
 *  Se o número for divisível por 3, no lugar do número escreva 'fizz'
 * Se o número for divisível por 5, no lugar do número escreva 'buzz'
 * Se o número for divisível por 3 e por  5, no lugar do número escreva 'fizzBuzz'
 * Se nao for divisível  por nada, retorna o número
 */

 export default class fizzBuzz {

     verifyNumber(number) {
        if(typeof number !== 'number') {
            return 'It is not a number';
        }
        
        if((number % 3) === 0 && (number % 5) === 0 ) {
            return 'fizzBuzz';
        } else if((number % 3) === 0 ) {
             return 'fizz';
        } else if ((number % 5) === 0 ) {
            return 'buzz';
        }

        return number;
     }
 }