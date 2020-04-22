import * as React from 'react';
import { StyleSheet, Text, View,FlatList,Button ,Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import bookData from "./json/booklist.json";
import { navigationRef } from './RootNavigation';
import BookScreen from './screens/BookScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DrawerScreen from './screens/DrawerScreen';





const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer ref={navigationRef}> 
     
    <Stack.Navigator>
   
      <Drawer.Screen name="Home" component={BookScreen}
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
       <Drawer.Screen 
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
      <Drawer.Screen name="My book" component={BookScreen} />
      
      </Stack.Navigator>
   
    
  </NavigationContainer>
  
  
  );
};

const styles = StyleSheet.create({
  
  title:{
    
   width:120,
   height:40
  }
 
 });
export default App;