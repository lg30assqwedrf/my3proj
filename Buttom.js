import React from "react";
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity} from "react-native";




const Buttom =() =>{
    
    return(
      
        <View style={styles.bottomnav}>
        <View style={styles.back}>
           <TouchableOpacity  onPress={() => alert('This is a button!')}>
           <Image
                        source={require('./img/icons8-category-100.png')}
                        style={styles.statuspic1}
                        />
                <Text style={styles.home}>健康類別</Text>
                
              
              </TouchableOpacity>
              
              
        </View>
           <View style={styles.back2}>
           <TouchableOpacity  onPress={() => alert('This is a button!')}>
           <Image
                        source={require('./img/icons8-playlist-80.png')}
                        style={styles.statuspic2}
                        />
                <Text style={styles.mybook}>健康紀錄</Text>
                
              
              </TouchableOpacity>
              
              
        </View>
        <View style={styles.back3}>
           <TouchableOpacity  onPress={() => alert('This is a button!')}>
           <Image
                        source={require('./img/icons8-ask-question-100.png')}
                        style={styles.statuspic3}
                        />
                <Text style={styles.favorite}>健康諮詢</Text>
                
              
              </TouchableOpacity>
              
              
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
   bottomnav:{
    flexDirection:'row'
   },
    back:{
        backgroundColor:'#ffffff',
       width:123,
       height:90,
       shadowColor: "#40000000",
       borderWidth:0.5,
       borderColor:'#d1d1d1'
    },
    back2:{
        backgroundColor:'#ffffff',
       width:130,
       height:90,
       shadowColor: "#40000000",
       borderWidth:0.5,
       borderColor:'#d1d1d1'
    },
    back3:{
        backgroundColor:'#ffffff',
       width:123,
       height:90,
       shadowColor: "#40000000",
       borderWidth:0.5,
       borderColor:'#d1d1d1'
    },
    statuspic1:{
        
        width:50,
        height:54,
        marginTop:6,
        marginLeft:38
    },
    statuspic2:{
        
        width:50,
        height:54,
        marginTop:7,
        marginLeft:38
    },
    statuspic3:{
        
        width:50,
        height:54,
        marginTop:6,
        marginLeft:38
    },
    home:{
        color:'#818181',
        fontSize:18,
        marginLeft:27
    },
    mybook:{
        color:'#818181',
        fontSize:18,
        marginLeft:29
    },
    favorite:{
        color:'#818181',
        fontSize:18,
        marginLeft:29
    }

    
    
});
    export default Buttom;