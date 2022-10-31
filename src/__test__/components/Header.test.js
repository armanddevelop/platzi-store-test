import React from 'react';
import 'jsdom-global/register';
import { create } from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import initialState from '../../initialState';
import Header from '../../components/Header';
import reducer from '../../reducers';

describe('<Header/> component', () => {
  const history = createMemoryHistory();
  const store = createStore(reducer, initialState);
  const ProviderMock = props => (
    <Provider store={store}>
      <Router history={history}>{props.children}</Router>
    </Provider>
  );
  test('expect the component is mount property ', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.length).toEqual(1);
  });

  test('Render title', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.find('.Header-title').text()).toBe('Platzi Store');
  });

  test('No header alert Render', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.exists('.Header-alert')).toBe(false);
  });

  test('Header alert Render', () => {
    const initialState = {
      cart: [
        {
          id: '1',
          image: 'https://arepa.s3.amazonaws.com/camiseta.png',
          title: 'Camiseta',
          price: 25,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
      ],
      products: [
        {
          id: '1',
          image: 'https://arepa.s3.amazonaws.com/camiseta.png',
          title: 'Camiseta',
          price: 25,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
      ],
    };
    const history = createMemoryHistory();
    const store = createStore(reducer, initialState);
    const ProviderMock = props => (
      <Provider store={store}>
        <Router history={history}>{props.children}</Router>
      </Provider>
    );

    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.exists('.Header-alert')).toBe(true);
    expect(header.find('.Header-alert').text()).toBe('1');
  });
});

describe('test the header component with snapshot', () => {
  const history = createMemoryHistory();
  const store = createStore(reducer, initialState);
  const ProviderMock = props => (
    <Provider store={store}>
      <Router history={history}>{props.children}</Router>
    </Provider>
  );
  test('<Header /> snapshot', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
