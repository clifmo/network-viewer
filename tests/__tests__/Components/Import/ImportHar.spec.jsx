import React from 'react';
import { mount } from 'enzyme';

import ImportHAR from './../../../../src/Components/Import/ImportHAR';
import NetworkProvider from './../../../../src/state/network/NetworkProvider';

describe('ImportHAR', () => {
  it('renders without crashing', () => {
    const element = mount(
      <NetworkProvider>
        <ImportHAR />
      </NetworkProvider>,
    );
    expect(element).toMatchSnapshot();
  });
});
