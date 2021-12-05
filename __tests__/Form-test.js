import React from 'react';
import Form from '../components/Form';
import {render, cleanup, fireEvent} from 'react-native-testing-library';

afterEach(cleanup);

describe('<Form />', () => {
    it('should match the snapshot', () => {
        const onSetSearch = jest.fn();
        const onSubmit = jest.fn();
        const rendered = render(<Form search={''} onSetSearch={onSetSearch} onSubmit={onSubmit} />).toJSON();
      
        expect(rendered).toMatchSnapshot();
    });

    it('should set search value', () => {
        const onSetSearch = jest.fn();
        const onSubmit = jest.fn();
        const rendered = render(<Form search={'aaa'} onSetSearch={onSetSearch} onSubmit={onSubmit} />);
        const inputComponent = rendered.getByTestId('input');

        expect(inputComponent.props.value).toEqual('aaa');
    });
    
    it('should fire onSetSearch events', () => {
        const onSetSearch = jest.fn();
        const onSubmit = jest.fn();
        const rendered = render(<Form search={''} onSetSearch={onSetSearch} onSubmit={onSubmit} />);
        const inputComponent = rendered.getByTestId('input');
      
        fireEvent(inputComponent, 'changeText', 'new text');
      
        expect(onSetSearch).toHaveBeenCalledWith('new text');
    });
    
    it('should fire onSubmit events', () => {
        const onSetSearch = jest.fn();
        const onSubmit = jest.fn();
        const rendered = render(<Form search={''} onSetSearch={onSetSearch} onSubmit={onSubmit} />);
        const buttonComponent = rendered.getByTestId('submit');
      
        fireEvent(buttonComponent, 'press');
      
        expect(onSubmit).toHaveBeenCalled();
    });
});