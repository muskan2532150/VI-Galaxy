/* eslint-disable no-unused-vars */
import { counterItem, countercomment } from './counter.js';

const { default: JSDOMEnvironment } = require('jest-environment-jsdom');
/* eslint-enable no-unused-vars */
/**
 * @jest-environment jsdom
 */

const array = ['1', '2', '3', '4', '5'];

describe('Counter Test', () => {
  it('check for number of Item', () => {
    expect(counterItem(array)).toBe(5);
  });

  it('check for number of Item', () => {
    expect(countercomment(array)).toBe(5);
  });
});
