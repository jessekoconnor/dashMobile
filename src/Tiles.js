import React, { Component } from 'react';
import { Alert, TouchableHighlight, ScrollView, View, Text, StyleSheet } from 'react-native';

class Tile extends Component {

    constructor(props) {
        super(props);
        this.arrayIndex = props.arrayIndex;
    }

    render() {
        let tileText = this.props.text || 'Tile Text Here';
        return (
            <TouchableHighlight style={styles.tileContainer} onPress={(event) => {this.props.onPressHandler(this.props.arrayIndex)}} underlayColor="white">
                <Text style={styles.tileText}>{tileText}</Text>
            </TouchableHighlight>
        );
    }
}

export default class Tiles extends Component {
    render() {
        let tileText = this.props.tileText || [];
        return (
            <View style={styles.tilesContainer}>
                <ScrollView horizontal>
                    {
                        tileText.map((text,index) => {return <Tile text={text} onPressHandler={this.props.onPressHandler} key={index} arrayIndex={index}/>})
                    }
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
        fontSize: 20,
    },
});