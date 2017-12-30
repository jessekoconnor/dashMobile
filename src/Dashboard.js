import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';

import Title from './Title';

export default class FlexDimensionsBasics extends Component {
    render() {
        return (
            // Try removing the `flex: 1` on the parent View.
            // The parent will not have dimensions, so the children can't expand.
            // What if you add `height: 300` instead of `flex: 1`?
            <View style={styles.parentView}>
                <View style={styles.title}>
                    <Title content={data.title}/>
                </View>
                <View style={styles.tiles}>
                    <Text>Tile List</Text>
                </View>
                <View style={styles.content}>
                    <Text>Content View</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parentView: {
        flex: 1,
    },
    title: {flex: 1, backgroundColor: 'powderblue'},
    tiles: {flex: 2, backgroundColor: 'skyblue'},
    content: {flex: 5, backgroundColor: 'steelblue'}
}),
    data = {
        title: 'supsup',
    };