import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from '../Header';
import bookData from '../json/booklist.json';
import Contnet from '../Content';
import Buttom from '../Buttom';
const  search= ({navigation}) => {
    return (
      
         <View style={{flex:2}}>
           <search title={bookData.bookTitle} />
           
         <Contnet contnet={bookData.bookList}/>
         <Buttom/>
         
        </View>
     
    );
  };
  export default search;