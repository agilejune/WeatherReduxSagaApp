import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherData = ({ data }) => {
    
    const weatherList = () => {
        if (data && data.list) {
            const result = data.list.map((element, i) => {
                return (
                    <View style={styles.card} key={i}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.headerText}>{element.dt_txt.split(' ')[0]}</Text>
                            <Text style={styles.headerText}>{element.dt_txt.split(' ')[1]}</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.contentText}>temperature: {element.main.temp} K</Text>
                            <Text style={styles.contentText}>feels like temperature: {element.main.feels_like} K</Text>
                        </View>
                        <View style={styles.cardFooter}>
                            <View style={styles.footerBadge}>
                                <Text style={styles.badgeText}>{element.weather[0].description}</Text>
                            </View>
                        </View>
                    </View>
                );
            });
            return result;
        } else {
            return null;
        }
    };

    return (
        <View style={styles.container} onStartShouldSetResponder={() => true} testID={'weatherData'}>
            <View style={styles.containerInner} testID={'dataList'}>
                {weatherList()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
    },
    containerInner: {
        paddingTop: 8,
        paddingHorizontal: 12,
        paddingBottom: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        width: 325,
        height: 143,
        borderRadius: 5,
        borderColor: '#17475B',
        borderWidth: 1,
        padding: 21,
        marginBottom: 44,
    },
    cardHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 7,
    },
    headerText: {
        color: '#F3997B',
        fontFamily: 'Roboto',
        fontSize: 12,
    },
    cardContent: {
        width: 298,
        height: 60,
    },
    contentText: {
        color: '#114358',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 16,
    },
    footerBadge: {
        backgroundColor: '#E6F4F1',
        borderRadius: 11,
        width: 89,
        height: 21,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: '#114258',
        fontSize: 10,
        fontFamily: 'Roboto',
        letterSpacing: 0,
    },
});

export default WeatherData;