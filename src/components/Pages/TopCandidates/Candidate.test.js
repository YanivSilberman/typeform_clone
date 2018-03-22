/**
 * @jest-environment node
 */

import React from 'react';
import ReactDOM from 'react-dom';

import TopCandidates from './index';
import Candidate from './Candidate'

import store from '../../../store'

import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

it('Router app renders without crashing', () => {
  const wrapper = Enzyme.shallow(
    <TopCandidates store={store} topCandidates={[]} />
  );
  expect(wrapper).toMatchSnapshot();
  // props
  expect(wrapper.prop('topCandidates')).toEqual([]);
});
