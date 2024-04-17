/* eslint-disable no-comments/disallowComments */

import { pathsToModuleNameMapper, type JestConfigWithTsJest } from 'ts-jest';
import { defaults as tsjPreset } from 'ts-jest/presets';

const jestConfig: JestConfigWithTsJest = {
  ...tsjPreset,
  preset: 'react-native',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js', './src/jest.setup.ts'],
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.spec.json',
        babelConfig: true,
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native|@react-native-community|@react-navigation|@notifee/react-native)',
  ],
  modulePaths: ['./src'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper({
      '@/*': ['*'],
    }),
    '\\.svg': '<rootDir>/src/__mocks__/svg.mock.ts',
  },
};

export default jestConfig;
