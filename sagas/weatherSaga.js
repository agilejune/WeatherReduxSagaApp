import { GET_WEATHER, LOADED, LOADING, SET_ERROR, WEATHER_REQUESTED } from '../store/types';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import { API_KEY } from '../config.json';
import { getTempData } from '../utils/tempData';

const getWeather = async (city) => {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=${city}`);
    // const resData = getTempData();

    if (!res.ok) {
        const resData = await res.json();
        throw new Error(resData.message);
    }

    const resData = await res.json();
    // console.log(resData);
    return resData;
}

export function* getWeatherSaga(action) {
    try {
        yield put({type: LOADING, payload: true});
        const response = yield call(getWeather, action.payload.city);
        yield put({
            type: GET_WEATHER,
            payload: response,
        });
        yield put({type: LOADED, payload: false});
    } catch (err) {
        yield put({
            type: SET_ERROR,
            payload: err.message,
        });
    }
}

export function* watcherSagas() {
    yield all([
        yield takeLatest(WEATHER_REQUESTED, getWeatherSaga)
    ]);
}