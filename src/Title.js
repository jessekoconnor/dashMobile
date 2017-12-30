import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';

export default class FlexDimensionsBasics extends Component {
    render() {
        return (
            <View style={styles.parentView}>
                <Text style={styles.text}>SupSupSup</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parentView: {
        flex: 1,
        justifyContent: 'flex-end',  // keep in bottom left
    },
    text: {
        fontSize: 30
    },
});