import React from 'react';
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import App from './App';
import configureStore from './store';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(
//     <Provider store={configureStore()}>
//       <App />
//     </Provider>,
//     div
//   );
//   ReactDOM.unmountComponentAtNode(div);
// });

test('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={configureStore()}>
        <App />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
