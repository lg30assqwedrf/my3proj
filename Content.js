import React from "react";
import { StyleSheet, Text, View, Image,ScrollView} from "react-native";
import bookData from "./json/booklist.json";
const Contents =() =>{
    
    return(
        <ScrollView>
        <View style={styles.back}>
            <View style={styles.box1}>
                <View style={styles.picback1}>
                    <Image
                        style={styles.pic1}
                        source={{uri:bookData.bookList[0].image}}/>
                </View>
                <View>
                    <Text style={styles.title1}>{bookData.bookList[0].title}</Text>

                </View>
            </View>
            <View style={styles.box11}>    
                <View style={styles.picback11}>
                    <Image
                        style={styles.pic11}
                        source={{uri:bookData.bookList[1].image}}/>
                </View>
                
                <View>
                    <Text style={styles.title11}>{bookData.bookList[1].title}</Text>
                    
                    
                </View>
                
            </View>
           
            <View style={styles.box2}>
                <View style={styles.picback2}>
                    <Image
                        style={styles.pic2}
                        source={{uri:bookData.bookList[2].image}}/>
                </View>
                <View>
                    <Text style={styles.title2}>{bookData.bookList[2].title}</Text>
                    
                   
                   
                </View>
            </View>
            <View style={styles.box22}>
                <View style={styles.picback22}>
                    <Image
                        style={styles.pic22}
                        source={{uri:bookData.bookList[3].image}}/>
                </View>
                <View>
                    <Text style={styles.title22}>{bookData.bookList[3].title}</Text>
                   
                   
                   
                </View>
                
            </View>
            <View style={styles.box3}>
                <View style={styles.picback3}>
                    <Image
                        style={styles.pic3}
                        source={{uri:bookData.bookList[4].image}}/>
                </View>
                <View>
                    <Text style={styles.title3}>{bookData.bookList[4].title}</Text>
                    
                   
                   
                </View>
            </View>
            <View style={styles.box33}>
                <View style={styles.picback33}>
                    <Image
                        style={styles.pic33}
                        source={{uri:bookData.bookList[5].image}}/>
                </View>
                <View>
                    <Text style={styles.title33}>{bookData.bookList[5].title}</Text>
                   
                   
                   
                </View>
                
            </View>
            
           
            <View style={styles.box4}>
                <View style={styles.picback4}>
                    <Image
                        style={styles.pic4}
                        source={{uri:bookData.bookList[6].image}}/>
                </View>
                <View>
                    <Text style={styles.title4}>{bookData.bookList[6].title}</Text>
                    
                   
                   
                </View>
            </View>
            <View style={styles.box44}>
                <View style={styles.picback44}>
                    <Image
                        style={styles.pic44}
                        source={{uri:bookData.bookList[7].image}}/>
                </View>
                <View>
                    <Text style={styles.title44}>{bookData.bookList[7].title}</Text>
                   
                   
                   
                </View>
                
            </View>
            
        </View>
        </ScrollView>
      
    )
}
const styles = StyleSheet.create({
   
    back:{
        height:800,
        backgroundColor:'#f8f8f8',
    },
    box1:{
        width:180,
        height:180,
        marginLeft:12,
        marginTop:30,
        shadowColor: "#40000000",
        
       
       
        
    },
    picback1:{
        width:140,
        height:140,
        marginLeft:18,
        marginTop:12,
        backgroundColor:'#B07373',
        shadowColor: "#000",
        shadowOffset:{width:5,height:5},
        shadowOpacity:0.2,
        borderWidth:1,
        borderColor:'#d1d1d1',
        borderRadius:20,
    },
    pic1:{
        
        width:80,
        height:80,
        marginLeft:31,
        marginTop:28,
        
    },
    title1:{
        width:300,
        height:22,
        marginTop:-30,
        marginLeft:105,
        fontSize:22,
        
        color:'#f8f8f8',
        fontWeight:'bold'
    },
     ///////////////////////////////////////////
     box11:{
        width:190,
        height:190,
        marginLeft:-12,
        marginTop:-29,
        
     },
     picback11:{
        width:140,
        height:140,
        marginLeft:218,
        marginTop:-140,
        backgroundColor:'#E1A61B',
        shadowColor: "#000",
        shadowOffset:{width:5,height:5},
        shadowOpacity:0.2,
        borderWidth:1,
        borderColor:'#d1d1d1',
        borderRadius:20,
    },
    pic11:{
        
        width:80,
        height:80,
        marginLeft:35,
        marginTop:28,
        
    },
    title11:{
        width:300,
        height:22,
        marginTop:-30,
        marginLeft:305,
        fontSize:22,
        
        color:'#f8f8f8',
        fontWeight:'bold'
    },






     /////////////////////////////////////////////////////////////////////////////
     box2:{
        width:190,
        height:190,
        marginLeft:12,
        marginTop:-140,
        
        
    },
    picback2:{
        width:140,
        height:140,
        marginLeft:18,
        marginTop:12,
        backgroundColor:'#E0E0B0',
        shadowColor: "#000",
        shadowOffset:{width:5,height:5},
        shadowOpacity:0.2,
        borderWidth:1,
        borderColor:'#d1d1d1',
        borderRadius:20,
    },

    pic2:{
        
        width:80,
        height:80,
        marginLeft:31,
        marginTop:28,
        
    },
    title2:{
        width:300,
        height:22,
        marginTop:-30,
        marginLeft:105,
        fontSize:22,
        
        color:'#f8f8f8',
        fontWeight:'bold'
    },
    ////////////////////////////////////////
    box22:{
        width:190,
        height:190,
        marginLeft:-12,
        marginTop:-37,
        
        
    },
    picback22:{
        width:140,
        height:140,
        marginLeft:218,
        marginTop:-140,
        backgroundColor:'#145126',
        shadowColor: "#000",
        shadowOffset:{width:5,height:5},
        shadowOpacity:0.2,
        borderWidth:1,
        borderColor:'#d1d1d1',
        borderRadius:20,
    },
    pic22:{
        
        width:80,
        height:80,
        marginLeft:31,
        marginTop:28,
        
    },
    title22:{
        width:300,
        height:22,
        marginTop:-30,
        marginLeft:305,
        fontSize:22,
        
        color:'#f8f8f8',
        fontWeight:'bold'
    },
    /////////////////////////////////////////////////////////////////////////////
    box3:{
        width:190,
        height:190,
        marginLeft:12,
        marginTop:-140,
        
        
    },
    picback3:{
        width:140,
        height:140,
        marginLeft:18,
        marginTop:12,
        backgroundColor:'#216861',
        shadowColor: "#000",
        shadowOffset:{width:5,height:5},
        shadowOpacity:0.2,
        borderWidth:1,
        borderColor:'#d1d1d1',
        borderRadius:20,
    },

    pic3:{
        
        width:80,
        height:80,
        marginLeft:31,
        marginTop:25,
        
    },
    title3:{
        width:300,
        height:22,
        marginTop:-30,
        marginLeft:65,
        fontSize:22,
        
        color:'#f8f8f8',
        fontWeight:'bold'
    },
    ////////////////////////////////////////
    box33:{
        width:190,
        height:190,
        marginLeft:-12,
        marginTop:-37,
     
        
    },
    picback33:{
        width:140,
        height:140,
        marginLeft:218,
        marginTop:-140,
        backgroundColor:'#BDD8E7',
        shadowColor: "#000",
        shadowOffset:{width:5,height:5},
        shadowOpacity:0.2,
        borderWidth:1,
        borderColor:'#d1d1d1',
        borderRadius:20,
    },
    pic33:{
        
        width:80,
        height:80,
        marginLeft:31,
        marginTop:28,
        
    },
    title33:{
        width:300,
        height:22,
        marginTop:-30,
        marginLeft:265,
        fontSize:22,
        
        color:'#f8f8f8',
        fontWeight:'bold'
    },
    /////////////////////////////////////////////////////////////////////////////
    box4:{
        width:190,
        height:190,
        marginLeft:12,
        marginTop:-140,
      
        
    },
    picback4:{
        width:140,
        height:140,
        marginLeft:18,
        marginTop:12,
        backgroundColor:'#D9B1DF',
        shadowColor: "#000",
        shadowOffset:{width:5,height:5},
        shadowOpacity:0.2,
        borderWidth:1,
        borderColor:'#d1d1d1',
        borderRadius:20,
    },

    pic4:{
        
        width:80,
        height:80,
        marginLeft:31,
        marginTop:28,
        
    },
    title4:{
        width:300,
        height:22,
        marginTop:-30,
        marginLeft:105,
        fontSize:22,
        
        color:'#f8f8f8',
        fontWeight:'bold'
    },
    ////////////////////////////////////////
    box44:{
        width:190,
        height:190,
        marginLeft:-12,
        marginTop:-37,
      
        
    },
    picback44:{
        width:140,
        height:140,
        marginLeft:218,
        marginTop:-140,
        backgroundColor:'#A8A5A7',
        shadowColor: "#000",
        shadowOffset:{width:5,height:5},
        shadowOpacity:0.2,
        borderWidth:1,
        borderColor:'#d1d1d1',
        borderRadius:20,
    },
    pic44:{
        
        width:80,
        height:80,
        marginLeft:31,
        marginTop:28,
        
    },
    title44:{
        width:300,
        height:22,
        marginTop:-30,
        marginLeft:265,
        fontSize:22,
        
        color:'#f8f8f8',
        fontWeight:'bold'
    },

});
    export default Contents;