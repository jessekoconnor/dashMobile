import React, { Component } from 'react';
import { ActivityIndicator, Alert, AppRegistry, View, Text, StyleSheet } from 'react-native';

import Title from './Title';
import Tiles from './Tiles';
import Content from './Content';

export default class FlexDimensionsBasics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        return fetch('https://0uom921bke.execute-api.us-east-1.amazonaws.com/Prod/legacy/scrape3S')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    scrape3s: responseJson.result,
                });
            })
            .catch((error) => {
                console.error(error);
            });

    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={styles.tileContainer}>
                <View style={styles.title}>
                    <Title content={data.title}/>
                </View>
                <View style={styles.tiles}>
                    <Tiles/>
                </View>
                <View style={styles.content}>
                    <Content data={this.state.scrape3s}/>
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