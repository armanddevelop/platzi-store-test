import React from 'react';
import 'jsdom-global/register';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Products from '../../components/Products';
import ProviderMock from '../../__mocks__/providerMock';
import { productsMock } from '../../__mocks__/productMock';

describe('<Products/> component reder', () => {
  test('expect the component <Producs/> render', () => {
    const productsComponent = shallow(
      <ProviderMock>
        <Products />
      </ProviderMock>
    );
    expect(productsComponent.length).toBe(1);
  });

  test('snapShot to <Product/> component ', () => {
    const product = create(
      <ProviderMock>
        <Products product={productsMock} />
      </ProviderMock>
    );
    expect(product.toJSON()).toMatchSnapshot();
  });
});
