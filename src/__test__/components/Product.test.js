import React from 'react';
import 'jsdom-global/register';
import { mount, shallow } from 'enzyme';
import Product from '../../components/Product';
import ProviderMock from '../../__mocks__/providerMock';
import productMock from '../../__mocks__/productMock';

describe('<Product/> component Reder', () => {
  test('expect the component Product is mount property ', () => {
    const productComponent = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );
    expect(productComponent.length).toEqual(1);
  });

  test('Test the onClick button', () => {
    const handleAddTocard = jest.fn();
    const productComponent = mount(
      <ProviderMock>
        <Product product={productMock} handleAddToCart={handleAddTocard} />
      </ProviderMock>
    );
    productComponent.find('button').simulate('click');
    expect(handleAddTocard).toHaveBeenCalledTimes(1);
    expect(productComponent.find('p').text()).toEqual(productMock.description);
    expect(productComponent.find('h2').text()).toEqual(
      `${productMock.title}$${productMock.price}`
    );
  });

  test('Get the attributes of img element ', () => {
    const handleAddTocard = jest.fn();
    const productComponent = mount(
      <ProviderMock>
        <Product product={productMock} handleAddToCart={handleAddTocard} />
      </ProviderMock>
    );
    const img = productComponent.find('img').html();
    expect(img).toContain(productMock.image);
    expect(img).toContain(productMock.title);
  });
});
