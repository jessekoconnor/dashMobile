import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

export default class Content extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title: 'Dec 24th', data: ["Every Body: 8:00 AM, Rachel (1 Hour)", "Every Body: 9:30 AM, Marla (1 Hour 30 Minutes)", "Every Body-CANCELED: 4:00 PM, Gretchen (1 Hour)", "Restorative--CANCELED: 5:30 PM, Michelle (1 Hour 15 Minutes)"]},
                        {title: 'Dec 25th', data: ["Every Body-CANCELED: 7:00 AM, Katie (1 Hour)", "Beginners: 9:00 AM, Bjorn (1 Hour)", "Every Body: 12:00 PM, Bjorn (50 Minutes)", "Every Body: 4:30 PM, Gretchen (1 Hour)", "Every Body: 6:15 PM, Gretchen (1 Hour 15 Minutes)"]},
                        {title: 'Dec 27th', data: ["Every Body: 8:00 AM, Rachel (1 Hour)", "Every Body: 9:30 AM, Marla (1 Hour 30 Minutes)", "Every Body-CANCELED: 4:00 PM, Gretchen (1 Hour)", "Restorative--CANCELED: 5:30 PM, Michelle (1 Hour 15 Minutes)"]},
                        {title: 'Dec 28th', data: ["Every Body: 8:00 AM, Rachel (1 Hour)", "Every Body: 9:30 AM, Marla (1 Hour 30 Minutes)", "Every Body-CANCELED: 4:00 PM, Gretchen (1 Hour)", "Restorative--CANCELED: 5:30 PM, Michelle (1 Hour 15 Minutes)"]},
                        {title: 'Dec 29th', data: ["Every Body: 8:00 AM, Rachel (1 Hour)", "Every Body: 9:30 AM, Marla (1 Hour 30 Minutes)", "Every Body-CANCELED: 4:00 PM, Gretchen (1 Hour)", "Restorative--CANCELED: 5:30 PM, Michelle (1 Hour 15 Minutes)"]},
                    ]}
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