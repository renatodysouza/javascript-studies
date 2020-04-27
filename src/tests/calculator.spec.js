/* eslint-disable no-undef */
// describe //separa metodos dentro das classes
// context --separa casos de testes

// only  run one test  context.only(...)
// skip it.skip(....)

// hooks 
//  before  uma vez antes do bloco
// after uma vez depois do bloco
// beforeeach todas as vezes antes de cada bloco
//  aftereach  roda todas as vezes no final de cada bloco


import { expect } from 'chai';

import Calculator from '../calculator';


describe.skip('Calculadora', () =>  {
    let cal;
    before(()=> {
       cal = new Calculator();
    })

    describe('sum', ()=> {
        it('Should return 4 when sum 2 +2', () => {
            const result = cal.sum(2,2);
            expect(result).to.equals(4)
        });
    })

    describe('substract', ()=> {
        it('Should substract  and return number 2', () => {
            const result = cal.subsTrac(4,2);
            expect(result).to.equals(2)
        });
    });

    describe('divide', ()=> {
        it('should divide and return 2', () => {
            const result = cal.divider(8,4);
            expect(result).to.equals(2);
        });
    });

    describe('multiple', ()=> {
        it('should multiple and return 10', ()=> {
            const result = cal.multiple(2,5);
            expect(result).to.equals(10);
        });
    });
})