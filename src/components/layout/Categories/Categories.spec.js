import React from 'react';
import Category from './Categories';
import renderer from 'react-test-renderer';

describe('categories', () => {
  it('renders category component correctly', () => {
    const tree = renderer.create(
      <Category />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
