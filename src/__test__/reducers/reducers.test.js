import reducer from '../../reducers';

describe('Test the reducers file', () => {
  it('Tests ADD_TO_CARD option', () => {
    const action = {
      payload: {
        id: '8',
        image: 'https://arepa.s3.amazonaws.com/test.png',
        title: 'Pruebas unitarias',
        price: 25,
        description: 'Pruebas unitarias para los reducers',
      },
      type: 'ADD_TO_CART',
    };
    const initialState = {
      cart: [],
    };
    const data = reducer(initialState, action);
    const { cart } = data;
    expect(cart.length).toBe(1);
  });
  it('Tests REMOVE_FROM_CART option', () => {
    const action = {
      payload: {
        id: '8',
      },
      type: 'REMOVE_FROM_CART',
    };
    const initialState = {
      cart: [
        {
          id: '8',
          image: 'https://arepa.s3.amazonaws.com/test.png',
          title: 'Pruebas unitarias',
          price: 25,
          description: 'Pruebas unitarias para los reducers',
        },
      ],
    };
    const data = reducer(initialState, action);
    const { cart } = data;
    expect(cart.length).toBe(0);
  });

  it('test no sending action in payload', () => {
    expect(reducer({}, '')).toEqual({});
  });
});
