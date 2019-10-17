import React, { Component } from 'react';
import { View, Animated, Easing } from 'react-native';

export default class webviewWithLoading extends Component {
    constructor(props) {
        super(props);
        this.state = { spinAnim: new Animated.Value(0) }
    }

    componentDidMount() {
        Animated.loop(Animated.timing(
            this.state.spinAnim,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )).start();
    }

    render() {
        const spin = this.state.spinAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Animated.Image
                    style={{ height: 100, width: 100, transform: [{ rotate: spin }] }}
                    source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_960_720.png' }} />
            </View>
        );
    }
}