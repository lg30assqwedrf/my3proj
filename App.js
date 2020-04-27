import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, Image, iconPath,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import bookData from "./json/booklist.json";
import { navigationRef } from './RootNavigation';
import BookScreen from './screens/BookScreen';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import DrawerScreen from './screens/DrawerScreen';
import search from './screens/searchscreen';

import {   
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } 
  from '@react-navigation/drawer';
import { Tile } from 'react-native-elements';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const aboutScreen = () =>{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#444444' }}>
      <Text style={{       
        fontSize:16,
        marginLeft:28,
        marginTop:-45,
        color:"#ffffff",
        fontWeight:"500"}}>about us</Text>
    </View>
  );
  
}
  


const SettingScreen = () =>{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{       
        fontSize:16,
        marginLeft:28,
        marginTop:-45,
        color:"#000000",
        fontWeight:"500"}}>settings</Text>
    </View>
  );
  
}

const FavScreen = () =>{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{       
        fontSize:16,
        marginLeft:28,
        marginTop:-45,
        color:"#000000",
        fontWeight:"500"}}>Favorites</Text>
    </View>
  );
}


const SearchScreen = () =>{
  return (
    <Stack.Navigator>
   
      <Stack.Screen name="Home" component={search}
      options={{
        title: "SEARCH",
        headerStyle:{ backgroundColor:'#2B475D',
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
 
              source={require('./img/left.png')
            }
                style={{width:18,height:18,marginLeft:15,marginTop:8}}
                />
            </TouchableOpacity>
        ),
        
      
      }}
    />
     
     
      
      </Stack.Navigator>
      
  );
  
}
const HomeStack = () => {
  return (
    
    
    <Stack.Navigator>
   
      <Stack.Screen name="Home" component={BookScreen}
      options={{
        title: "健康",
        headerStyle:{ backgroundColor:'#2B475D',
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
    
    <DrawerContentScrollView style={{marginTop: 80}} {...rest}>
     
<DrawerItemList stle={{paddingTop:30}}{...rest} />
    </DrawerContentScrollView>
    
  );
}
const App = () => { 
  return (
  
    <NavigationContainer ref={navigationRef}> 
    <Drawer.Navigator 
    
    drawerStyle={{
      width: '100%', 
      width: 414,

      marginTop:2,
      backgroundColor:'#2B475D',
      
    }}
    drawerContentOptions={{
      activeBackgroundColor: '#DDAA00',
      activeTintColor:'#ffffff',
      itemStyle: { marginLeft:0, marginRight: 0 },
      labelStyle: { fontSize: 20,color:'#ffffff' },
      
    }}
    drawerContent={props => <CustomDrawerContent {...props} />}
  >
    
    <Drawer.Screen 
      name="Home" 
      component={HomeStack} 
      options={
        {
          drawerIcon: ({ tintColor }) => (
            <Image
            source={require('./img/Home.png')}
              style={{width:40, height:40, marginLeft:110, marginTop:10,  marginBottom:12,tintColor:tintColor}}
            />
          ),            
        }
      }
    />    
    <Drawer.Screen 
    
    name="Search" 
    component={SearchScreen} 
    options={
      {
        drawerIcon: ({ tintColor }) => (
          <Image 
          source={require('./img/search.png')}
          style={{ width:40, height:40, marginLeft:110, marginTop:10,  marginBottom:12,}}
          />
        ),            
      }
    }
    />
    <Drawer.Screen 
      name="Share" 
      component={FavScreen} 
      options={
        {
          drawerIcon: ({ tintColor }) => (
            <Image
            source={require('./img/share.png')}
              style={{width:40, height:40, marginLeft:110, marginTop:10,  marginBottom:12,}}
            />
          ),            
        }
      }
    />  
     <Drawer.Screen 
      name="Account" 
      component={SettingScreen} 
      options={
        {
          drawerIcon: ({ tintColor }) => (
            <Image
            source={require('./img/user.png')}
              style={{width:40, height:40, marginLeft:110, marginTop:10, marginBottom:12,}}
            />
          ),            
        }
      }
    />  
             <Drawer.Screen 
      name="settings" 
      component={aboutScreen} 
      options={
        {
          drawerIcon: ({ tintColor }) => (
            <Image
            source={require('./img/setting.png')}
              style={{width:40, height:40, marginLeft:110, marginTop:10, marginBottom:12,}}
            />
          ),            
        }
      }
    /> 
    
    </Drawer.Navigator>
   

    </NavigationContainer>
   
  );
}


export default App;