import { describe } from 'riteway';
import { epicsMiddleware } from '../../src/Effect/App';

describe('App effect', assert => {
  assert({
    given: null,
    should: 'expose an epics middleware',
    actual: typeof epicsMiddleware,
    expected: "function"
  });
});
