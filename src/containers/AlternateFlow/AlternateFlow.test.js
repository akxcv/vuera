import React from 'react';
import renderer from 'react-test-renderer';
import AlternateFlow from './AlternateFlow';

describe('AlternateFlow', () => {
    it('renders', () => {
        const tree = renderer.create(<AlternateFlow />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
