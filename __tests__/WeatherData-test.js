import React from "react";
import {render, cleanup} from 'react-native-testing-library';
import { example } from "../utils/tempData";
import WeatherData from '../components/WeatherData';

afterEach(cleanup);

describe('<WeatherData />', () => {
    it('should match the snapshot', () => {
        const rendered = render(<WeatherData data={example} />).toJSON();

        expect(rendered).toMatchSnapshot();
    });

    it('should render data correctly', () => {
        const rendered = render(<WeatherData data={example} />);
        const temperature = rendered.queryByText('temperature: 271.04 K');

        expect(temperature).not.toBeNull();
    });

    it('should render nothing', () => {
        const rendered = render(<WeatherData data={null} />);
        const temperature = rendered.queryByText('temperature: 271.04 K');

        expect(temperature).toBeNull();
    });
});