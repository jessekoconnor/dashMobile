import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';

import Title from './Title';
import Tiles from './Tiles';
import Content from './Content';

export default class FlexDimensionsBasics extends Component {
    render() {
        return (
            // Try removing the `flex: 1` on the parent View.
            // The parent will not have dimensions, so the children can't expand.
            // What if you add `height: 300` instead of `flex: 1`?
            <View style={styles.tileContainer}>
                <View style={styles.title}>
                    <Title content={data.title}/>
                </View>
                <View style={styles.tiles}>
                    <Tiles/>
                </View>
                <View style={styles.content}>
                    <Content/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tileContainer: {
        flex: 1,
        paddingTop: 10,
    },
    title: {flex: 1, backgroundColor: 'powderblue'},
    tiles: {flex: 2, backgroundColor: 'skyblue', flexDirection: 'row'},
    content: {flex: 6, backgroundColor: 'steelblue'}
}),
    data = {
        title: 'supsup',
    };