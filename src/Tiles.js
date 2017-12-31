import React, { Component } from 'react';
import { ScrollView, AppRegistry, View, Text, StyleSheet } from 'react-native';

class Tile extends Component {
    render() {
        return (
            <View style={styles.tileContainer}>
                <Text style={styles.tileText}>Tile Content</Text>
            </View>
        );
    }
}

export default class Tiles extends Component {
    render() {
        return (
            <View style={styles.tilesContainer}>
                <ScrollView horizontal>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tilesContainer: {

    },
    tileContainer: {
        flex: 1,
        justifyContent: 'flex-end',  // keep text in bottom left
        borderWidth: 1,
    },
    tileText: {
        fontSize: 20
    },
});