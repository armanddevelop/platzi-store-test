import React from 'react';
import 'jsdom-global/register';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer/>', () => {
  const footer = mount(<Footer />);
  test('Render <Footer/>', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render content title ', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer snapShot', () => {
  test('Expect the UI of the footer component ', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
