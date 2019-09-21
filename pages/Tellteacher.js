import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default class ISection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:20}}>ครูประจำรถ</Text>
        <SectionList
          sections={[
            {title: 'ครูประจำรถคันที่ 1', data: ['คุณครูมานะ มานพ', <Text style={{ fontSize: 13,}}> 0835647584</Text>]},
            {title: 'ครูประจำรถคันที่ 2', data: [ 'คุณครูนาดี สีขาว',<Text style={{ fontSize: 13,}}> 0812352554</Text>]},
            {title: 'ครูประจำรถคันที่ 3', data: ['คุณครูแก้ว นานา', <Text style={{ fontSize: 13,}}> 0833455768</Text>]},
            {title: 'ครูประจำรถคันที่ 4', data: [ 'คุณครูต้นไม้ ร่มเย็น',<Text style={{ fontSize: 13,}}> 0865435654</Text>]},
            {title: 'ครูประจำรถคันที่ 5', data: ['คุณครูแดง มานพ', <Text style={{ fontSize: 13,}}> 097688986</Text>]},
            {title: 'ครูประจำรถคันที่ 6', data: [ 'คุณครูสบาย สีแดง',<Text style={{ fontSize: 13,}}> 0898775756</Text>]},
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
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#FFCC99',
  },
  item: {
    padding: 10,
    fontSize: 14,
    height: 44,
  },
})