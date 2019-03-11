import React from 'react';
import renderer from 'react-test-renderer';
import BankDetails from './BankDetails';

describe('BankDetails', () => {
    it('renders', () => {
        const tree = renderer.create(<BankDetails />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
