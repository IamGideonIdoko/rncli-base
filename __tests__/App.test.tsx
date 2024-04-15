import 'react-native';
import React from 'react';
import App from '../App';

// NOTE: import explicitly to use the types shipped with jest.
import { it } from '@jest/globals';

// NOTE: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
