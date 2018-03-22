/**
 * @jest-environment node
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Typeform } from './index';
import store from '../store'

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

it('Container app renders without crashing', () => {
  const wrapper = shallow(<Typeform store={store} />)
  expect(wrapper).toMatchSnapshot();
});
