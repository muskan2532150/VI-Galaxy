
/* eslint-disable no-unused-vars */
const { default: JSDOMEnvironment } = require('jest-environment-jsdom');
/* eslint-enable no-unused-vars */
/**
 * @jest-environment jsdom
 */
import { counterItem, countercomment } from "./counter.js";

let array = ['1', '2', '3', '4', '5'];

describe('Counter Test', () => {
    it('check for number of Item', () => {
        expect(counterItem(array)).toBe(5);
    });

    it('check for number of Item', () => {
        expect(countercomment(array)).toBe(5);
    });
})


