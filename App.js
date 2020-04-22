import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, Image, iconPath } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import bookData from "./json/booklist.json";
import { navigationRef } from './RootNavigation';
import BookScreen from './screens/BookScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DrawerScreen from './screens/DrawerScreen';

import {   
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } 
  from '@react-navigation/drawer';
import { Tile } from 'react-native-elements';
const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
const aboutScreen = () =>{
  
  
}

const SettingScreen = () =>{
  
  
}

const FavScreen = () =>{
  
}
const HomeScreen = () =>{
  
  
}


const AlbumStack = () => {
  return (
    
     
    <Stack.Navigator>
   
      <Stack.Screen name="Home" component={BookScreen}
      options={{
        title: bookData.bookTitle,
        headerStyle:{ backgroundColor:'#00b49f',
                      height:80,
                      
                      
                      
      },
        headerTitleStyle: {
          fontWeight: '400',
          fontSize: 20,
          color:'#ffffff',
         
          
          
        }, 
        headerLeft: () => (
          <TouchableOpacity  onPress={() =>navigationRef.current?.navigate("Draw")}>
           <Image 
 
              source={require('./img/btn_navbar_mobile.png')
            }
                style={{width:40,height:40,marginLeft:8,marginTop:8}}
                />
            </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity  onPress={() => alert('This is a button!')}>
           <Image 
 
              source={
                require('./img/btn_search.png')}
                style={{width:40,height:40,marginRight:8,marginTop:8}}
                />
              
              
            
            </TouchableOpacity>
        ),
      }}
    />
       <Stack.Screen 
     name="Draw" 
      component={DrawerScreen} 
      options={{
        title: bookData.bookTitle,
        headerStyle:{ backgroundColor:'#00b49f',
                      height:80, 
                      
                      
                      
      },
        headerTitleStyle: {
          fontWeight: '400',
          fontSize: 20,
          color:'#ffffff',
         
          
        }, 
        headerLeft: () => (
          <TouchableOpacity  onPress={() =>navigationRef.current?.navigate("Home")}>
           <Image 
 
              source={require('./img/btn_navbar_mobile.png')
            }
                style={{width:40,height:40,marginLeft:8,marginTop:8}}
                />
            </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity  onPress={() => alert('This is a button!')}>
           <Image 
 
              source={
                require('./img/btn_search.png')}
                style={{width:40,height:40,marginRight:8,marginTop:8}}
                />
              
              
            
            </TouchableOpacity>
        ),
      }}
     
       />
     
      
      </Stack.Navigator>
   
    

  );
}
const CustomDrawerContent = ({ ...rest }) => {
  return (
    <DrawerContentScrollView style={{marginTop:-48}} {...rest} >
  <View style={{height:168,width:320,backgroundColor:'#00b49f'}}>
      <Image
        source={require('./img/img_user_photo.png')}
        style={{width:70,height:70,marginTop:37,marginLeft:13}}
        featured
      />

        </View>
      <DrawerItemList {...rest} />
    </DrawerContentScrollView>
  
  );
}
const App = () => {
  return (
    <NavigationContainer ref={navigationRef}> 
    
    <Drawer.Navigator 
     drawerStyle={{ width: 320,}}
     drawerContentOptions={{
       activeBackgroundColor: '#00b49f',
       activeTintColor:'#fff',
       itemStyle: { marginLeft: 0, marginRight: 0 },
       labelStyle: { fontSize: 20 },
     }}
     drawerContent={props => <CustomDrawerContent {...props} />}
     >
          <Drawer.Screen name="Home" component={AlbumStack} />
          <Drawer.Screen name="My book" component={HomeScreen} />
          <Drawer.Screen name="Favorites" component={FavScreen} />
          <Drawer.Screen name="Settings" component={SettingScreen} />
          <Drawer.Screen name="about us" component={aboutScreen} />
      </Drawer.Navigator>

    </NavigationContainer>
    
  );
}

export default App;