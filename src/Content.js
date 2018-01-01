import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

export default class Content extends Component {

    dataPrep() {
        return this.props.data ? this.props.data.map((point) => {
            return {
                title: point.date,
                data: point.artists,
            };
        }) : [];
    }

    render() {
        let sections = this.dataPrep();
        return (
            <View style={styles.container}>
                <SectionList
                    sections={sections}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
    },
    item: {
        padding: 10,
        fontSize: 15,
        height: 30,
    },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => SectionListBasics);