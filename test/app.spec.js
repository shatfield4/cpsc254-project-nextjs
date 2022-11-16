const assert = require('assert');
const { expect } = require('chai');
const { fetchProductResults } = require('../pages/index');

describe('API should get Items', () => {
    it('should get Item' , () => {
        const result = fetchProductResults('');
        // assert.equal(result, '');
        expect(result).to.be.eq('');
    });
});