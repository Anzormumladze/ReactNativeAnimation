import React, { Component } from 'react';
import { Animated, TouchableWithoutFeedback, Text, View, StyleSheet } from 'react-native';


class animatedTennisBall extends Component {
    state = {
        moveAnimation: new Animated.ValueXY({ x: 10, y: 450 })
    }

    _moveBall = () => {
        Animated.spring(this.state.moveAnimation, {
            toValue: { x: 250, y: 10 },
        }).start()
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.tennisBall, this.state.moveAnimation.getLayout()]}>
                    <TouchableWithoutFeedback style={styles.button} onPress={this._moveBall}>
                        <Text style={styles.buttonText}>Press</Text>
                    </TouchableWithoutFeedback>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    tennisBall: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'greenyellow',
        borderRadius: 100,
        width: 100,
        height: 100,
    },
    button: {
        paddingTop: 24,
        paddingBottom: 24,
    },
    buttonText: {
        fontSize: 24,
        color: '#333',
    }
});

export default animatedTennisBall