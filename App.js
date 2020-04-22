import React from 'react';
import { StyleSheet, Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import bookData from "./json/booklist.json";
import { navigationRef } from './RootNavigation';
import BookScreen from './screens/BookScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DrawerScreen from './screens/DrawerScreen';

function MeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const AlbumStack = () => {
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
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Album" component={AlbumStack} />
       
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;