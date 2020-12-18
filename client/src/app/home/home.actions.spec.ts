import { Case } from '.';
import * as fromHome from './home.actions';

describe('updateCase', () => {
  it('should return an action', () => {
    const testCase: Case = {
      name: 'foo',
      options: { foo: 'foo', bar: 'bar' },
      selected: 'foo'
    };
    expect(fromHome.updateCase({ payload: testCase }).type).toBe('[Home] update case');
  });
});
