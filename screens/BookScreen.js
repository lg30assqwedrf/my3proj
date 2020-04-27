import React from 'react';
import { StyleSheet, Text, View,FlatList,ScrollView } from 'react-native';
import Header from '../Header';
import bookData from '../json/booklist.json';
import Contnet from '../Content';
import Buttom from '../Buttom';
const Mybook = ({navigation}) => {
  return (
    <ScrollView style={{paddingTop: 40}}>
       <View style={{flex:2}}>
         <Header title={bookData.bookTitle} />
         
       <Contnet contnet={bookData.bookList}/>
       <Buttom/>
       
      </View>
   </ScrollView>
  );
};

export default Mybook;