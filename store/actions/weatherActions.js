import { WEATHER_REQUESTED} from '../types';


export const getWeather = (city) => {
    return {
        type: WEATHER_REQUESTED,
        payload: {city},
    };
}