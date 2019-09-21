import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default class Telldriver extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:20}}>ครูประจำรถ</Text>
        <SectionList
          sections={[
            {title: 'คนขับรถคันที่ 1', data: ['นายมานะ มานพ', <Text style={{ fontSize: 13,}}> 0835647584</Text>]},
            {title: 'คนขับรถคันที่ 2', data: ['นายนาดี สีขาว',<Text style={{ fontSize: 13,}}> 0812352554</Text>]},
            {title: 'คนขับรถคันที่ 3', data: ['นายแก้ว นานา', <Text style={{ fontSize: 13,}}> 0833455768</Text>]},
            
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
    backgroundColor: '#A0AFFF',
  },
  item: {
    padding: 10,
    fontSize: 14,
    height: 44,
  },
})