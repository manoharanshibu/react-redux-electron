import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow, mount } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './reducers/reducers'

const store = createStore(reducers);

configure({ adapter: new ReactSixteenAdapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store} ><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('renders home page elements', () => {
  const wrapper = shallow(<App />);
  const mountComp = mount(<Provider store={store} ><App /></Provider>);
  it('renders select cells button', () => {
    expect(mountComp.find('.button').text()).toBe('Select Cells');
  });

  it('it should have rendered all rows and columns', () => {
    expect(mountComp.find('.table__cell').length).toBe(100);
  })

  // TODO:
  it('selected column should have rendered yellow color', () => {
    
  });

  it('surrounding columns should have rendered cian', () => {
    
  });

  it('selected colmn should be below the diagonal', () => {
    
  });
});
