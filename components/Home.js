import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title='Show panel' onPress={() => this._panel.show()} />

                <SlidingUpPanel ref={c => this._panel = c}>
                    <View style={styles.container}>
                        <Text>Japara </Text>
                        <Button title='Hide' onPress={() => this._panel.hide()} />
                    </View>
                </SlidingUpPanel>

            </View>
        )
    }
}



const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default Home