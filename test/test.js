'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('getUpperCase function test', () => {
    it('should return SAMPLE', () => {
        var result = index.getUpperCase('Sample');
        expect(result).to.equal('SAMPLE');
    });
});
