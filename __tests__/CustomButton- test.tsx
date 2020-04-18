import React from 'react';
import {CustomButton} from '../src/components';
import renderer from 'react-test-renderer';

test('CutomButton snapshot', () => {
    const snap = renderer.create(
        <CustomButton name={'test'} onPress={() => null} />
    ).toJSON();
    
    expect(snap).toMatchSnapshot();
})

test('CutomButton loading snapshot', () => {
    const snap = renderer.create(
        <CustomButton loading={true} name={'test'} onPress={() => null} />
    ).toJSON();
    
    expect(snap).toMatchSnapshot();
})