import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GameOverScreen = ({ route, navigation }) => {
    const { winner } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {winner === 'draw' ? "It's a Draw!" : `Player ${winner} Wins!`}
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('StartGame')}
            >
                <Text style={styles.buttonText}>Play Again</Text>
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
        backgroundColor: '#363062',
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

export default GameOverScreen;
