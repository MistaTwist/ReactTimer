var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect('Countdown').toExist();
  });

  describe('Handle setCountdown', () => {
    it('should set state to started and count down', () => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout( () => {
        expect(countdown.state.count).toBe(9);
      }, 1001);

    });

    it('should not count down past 0', () => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      setTimeout( () => {
        expect(countdown.state.count).toBe(0);
      }, 3001);

    });
  });

});
