/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard, ScrollView, Image} from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';

import { getWeather } from './store/actions/weatherActions';
import Form from './components/Form';
import Weather from './components/Weather';

const App = () => {
  const [search, setSearch] = useState('');  
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector(state => state.weather);

  const submitSearchHandler = () => {
    if (search === '') {
      return Alert.alert('Validation', 'City name is required!', [{text: 'OK'}]);
    }

    dispatch(getWeather(search));
    Keyboard.dismiss();
  };
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView>
      <View style={styles.container}>
        <Form search={search} onSetSearch={setSearch} onSubmit={submitSearchHandler} />
        <Weather loading={loading} data={data} error={error} />        
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('./assets/taxi-design.png')} />
        </View>
      </View>
      </ScrollView>
    </TouchableWithoutFeedback>    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    height: 350,    
    width: '100%'
  },
  image: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  }
});

export default connect(null, getWeather)(App);
