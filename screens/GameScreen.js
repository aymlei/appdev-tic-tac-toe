// GameScreen.js (Tic-Tac-Toe game screen)
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const initialBoard = Array(9).fill(null);

const GameScreen = ({ navigation }) => {
    const [board, setBoard] = useState(initialBoard);
    const [isPlayerTurn, setIsPlayerTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        checkWinner();
    }, [board]);

    const checkWinner = () => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let [a, b, c] of lines) {
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a]);
                return;
            }
        }

        if (board.every(square => square)) setWinner('draw');
    };

    const handleSquarePress = index => {
        if (!board[index] && !winner) {
            const newBoard = [...board];
            newBoard[index] = isPlayerTurn ? 'X' : 'O';
            setBoard(newBoard);
            setIsPlayerTurn(!isPlayerTurn);
        }
    };

    const handleReset = () => {
        setBoard(initialBoard);
        setIsPlayerTurn(true);
        setWinner(null);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tic Tac Toe</Text>
            <View style={styles.board}>
                {board.map((value, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.square}
                        onPress={() => handleSquarePress(index)}
                        disabled={value || winner}>
                        <Text style={[styles.squareText, { color: value === 'X' ? '#435585' : '#E5C3A6' }]}>
                            {value || ''}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={styles.result}>{winner ? (winner === 'draw' ? "It's a draw" : `Player ${winner} wins!`) : `Player ${isPlayerTurn ? 'X' : 'O'}'s turn`}</Text>
            <TouchableOpacity style={styles.button} onPress={handleReset}>
                <Text style={styles.buttonText}>Reset Game</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#F8F8F8' 
    },
    title: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 20 
    },
    board: { 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        width: 300, 
        height: 300 
    },
    square: { 
        width: 100, 
        height: 100, 
        borderWidth: 2, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    squareText: { 
        fontSize: 36 
    },
    result: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginVertical: 20 
    },
    button: { 
        backgroundColor: '#0D92F4', 
        paddingHorizontal: 40, 
        paddingVertical: 15, 
        borderRadius: 5 
    },
    buttonText: { 
        color: '#fff', 
        fontSize: 16, 
        fontWeight: 'bold', 
        textAlign: 'center' 
    }
});

export default GameScreen;
