import configureStore from 'redux-mock-store';
import { cleanup } from 'react-native-testing-library';
import createSagaMiddleware from 'redux-saga';
import { watcherSagas } from '../sagas/weatherSaga';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureStore([sagaMiddleware]);

afterEach(cleanup);

describe('<APP />', () => {

  it('should display current data', () => {
    const store = mockStore({});
    sagaMiddleware.run(watcherSagas);

    const expectedActions = [
      { "type": "GET_WEATHER", data: 'data' },
      { "type": "SET_ERROR", data: "data" },
      { "type": "LOADING", data: "data" },
      { "type": "LOADED", data: "data" }
    ];

    store.subscribe(() => {
      const actions = store.getActions();
      if (actions.length >= expectedActions.length) {
        expect(actions).toEqual(expectedActions);
        done();
      }
    });


    store.dispatch({ type: "WEATHER_REQUESTED" });
  });
});