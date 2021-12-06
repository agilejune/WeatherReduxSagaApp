import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Form = ({ search, onSetSearch, onSubmit }) => {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.headingText}>Hello Sunshine!</Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.descriptioinText}>Can you please tell</Text>
                <Text style={styles.descriptioinText}>me the weather</Text>
                <Text style={styles.descriptioinText}>in Germany?</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.labelText}>Please enter a city</Text>
                <TextInput style={styles.input} value={search} onChangeText={(val) => {onSetSearch(val)}} testID={'input'} />
                <View style={styles.buttonLook}>
                    <TouchableOpacity style={styles.button} onPress={onSubmit} testID={'submit'}>
                        <Text style={styles.buttonText}>Have a look</Text>
                    </TouchableOpacity>
                </View>                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 47,
        alignItems: 'center',
    },
    heading: {
        top: 0,
        left: 0,
        width: '100%',
        height: 47,
        alignItems: 'center',
    },
    headingText: {
        textAlign: 'center',
        fontFamily: 'Nunito-Black',
        letterSpacing: 0,
        color: '#F3997B',
        opacity: 1,
        fontSize: 30,
    },
    description: {
        marginTop: 15,
        alignItems: 'center',
        marginBottom: 30,
    },
    descriptioinText: {
        textAlign: 'center',
        fontFamily: 'Nunito-Black',
        letterSpacing: 0,
        opacity: 1,
        color: '#17475B',
        fontSize: 30,
    },
    content: {
        alignItems: 'center',
    },
    labelText: {
        color: '#114358',
        fontFamily: 'Roboto',
        fontSize: 16,
        marginBottom: 14,
    },
    input: {
        height: 45,
        width: 234,
        borderWidth: 2,
        borderColor: '#17475B',
        borderRadius: 1.5,
        marginBottom: 25,
        textAlign: 'center',
        color: '#17475B',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Roboto'        
    },
    buttonLook: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#F3997B',
        width: 160,
        height: 40,
        justifyContent: 'center',
        borderRadius: 3,
        elevation: 5,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Roboto',
        color: 'white',
    },
});

export default Form;