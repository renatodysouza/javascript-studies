/* eslint-disable no-undef */

import { expect } from 'chai';

import FizzBuzz from '../fizzBuzz';


describe('Fizz Buzz', () => {
    let fizzBuzz;
    before(()=>{
        fizzBuzz =  new FizzBuzz();
    });

    it('should return string when input is not a number', ()=> {
        const result = fizzBuzz.verifyNumber('isString');
        expect(result).to.be.contain('not a number')
        
    });

    it('should return fizz when 81', ()=> {
        const result = fizzBuzz.verifyNumber(81);
        expect(result).to.be.equal('fizz')
        
    });

    it('should return fizz when number divible by 5', ()=> {
        const result = fizzBuzz.verifyNumber(5);
        expect(result).to.be.equal('buzz')
        
    });

    it('should return fizz when  75 divide by 5 and 3', ()=> {
        const result = fizzBuzz.verifyNumber(75);
        expect(result).to.be.equal('fizzBuzz')
        
    });

    it('should return the number when  not divide by 5 and 3', ()=> {
        const result = fizzBuzz.verifyNumber(94);
        expect(result).to.be.equal(94)
        
    });


});