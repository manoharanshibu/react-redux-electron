import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSixteenAdapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('renders home page elements', () => {
  it('renders select cells button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.button').text()).toBe('Select Cells');
  })
});
