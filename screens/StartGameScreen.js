import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const StartGameScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tic-Tac-Toe</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Game')}
            >
                <Text style={styles.buttonText}>Play</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#0D92F4',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default StartGameScreen;
