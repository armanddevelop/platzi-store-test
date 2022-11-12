import actions from '../../actions';
import { productMock } from '../../__mocks__/productMock';

describe('actions functions test', () => {
  const expectedObj = (action, payload = 0) => ({
    type: action,
    payload,
  });
  test('addToCart function', () => {
    const payload = productMock;
    expect(actions.addToCart(payload)).toEqual(
      expectedObj('ADD_TO_CART', payload)
    );
  });

  test('removeFromCart function', () => {
    const payload = 3;
    expect(actions.removeFromCart(payload)).toEqual(
      expectedObj('REMOVE_FROM_CART', payload)
    );
  });
});
