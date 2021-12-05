import React from "react";
import Weather from "../components/Weather";
import {render, cleanup} from 'react-native-testing-library';
import { example } from '../utils/tempData';

afterEach(cleanup);

describe('<Weather />', () => {
    it('should match the snapshot', () => {
        const rendered = render(<Weather loading={false} data={example} error={null} />).toJSON();

        expect(rendered).toMatchSnapshot();
    });

    it('should render loading indicator', () => {
        const rendered = render(<Weather loading={true} data={example} error={null} />);
        const loadingIndicator = rendered.queryByTestId('indicator');
        const weatherData = rendered.queryByTestId('weatherData');
        const error = rendered.queryByTestId('error');

        expect(loadingIndicator).not.toBeNull();
        expect(weatherData).toBeNull();
        expect(error).toBeNull();
    });

    it('should render weather data', () => {
        const rendered = render(<Weather loading={false} data={example} error={null} />)
        const loadingIndicator = rendered.queryByTestId('indicator');
        const weatherData = rendered.queryByTestId('weatherData');
        const error = rendered.queryByTestId('error');

        expect(loadingIndicator).toBeNull();
        expect(weatherData).not.toBeNull();
        expect(error).toBeNull();
    });

    it('should render error message', () => {
        const rendered = render(<Weather loading={false} data={example} error={'city not find'} />)
        const loadingIndicator = rendered.queryByTestId('indicator');
        const weatherData = rendered.queryByTestId('weatherData');
        const error = rendered.queryByTestId('error');

        expect(loadingIndicator).toBeNull();
        expect(weatherData).toBeNull();
        expect(error).not.toBeNull();
    });
});