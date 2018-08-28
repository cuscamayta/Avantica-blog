import React from 'react';
import NavBar from './NavBar';
import renderer from 'react-test-renderer';

describe('navbar', () => {
  it('renders navbar component correctly', () => {
    const tree = renderer.create(
      <NavBar />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
