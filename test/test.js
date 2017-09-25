const aritgeo=require('../aritgeo.js');
var assert = require('assert');
describe('aritgeo tests', function() {
    it('Should Test for Arithmetic progression', ()=> {
        assert(aritgeo([2,5,8,11,14]), 'Arithmetic');
    })

    it('Should Test for Geometric progression', ()=>{
        assert(aritgeo([1,3,9,27]), 'Geometric');
    })

    it('Should Test for Empty array', ()=>{
        assert(aritgeo([]), '0');
    })

    it('Should Test for non-Geometric and non-Arithmetic progression', ()=>{
        assert(aritgeo([1,3,4,5,7,20]), '-1');
    })

    it('Should Test for negative Arithmetic progression', ()=>{
        assert(aritgeo([-8, -6, -4, -2]), 'Arithmetic');
    })
    
    it('Should Test for negative Geometric progression', ()=>{
        assert(aritgeo([-1, -3, -9, -27]), 'Arithmetic');
    })

    it('Should Test for negative non-Arithmetic and negative non-Geometric progression', ()=>{
        assert(aritgeo([-5, -6, -2, -1]), '-1');
    })

});

