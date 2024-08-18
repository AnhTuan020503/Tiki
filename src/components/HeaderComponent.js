import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Image 
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Header =({title})=>{
    return(
        <View style={styles.headerContainer}>
        {/*  */}
        <View style={styles.cartContainer}>
            <View style={styles.cartIcon}/>
        </View>
        {/*  */}
        <Text style={styles.headerText}>{title}</Text>
        {/*  */}
        <View style={styles.cartContainer}>
            <FontAwesome
                name="shopping-cart"
                size={HEADR_ICON_SIZE}
                color="#fff" 
            />
        </View>
    </View>
    );
};
const HEADR_ICON_SIZE =24;
const styles =StyleSheet.create({
    headerContainer:{
        flexDirection:'row',
        paddingTop:50,
        paddingBottom:4,
        backgroundColor:'#1e88e5',
        justifyContent:'space-between',
    },
    cartContainer:{
        paddingHorizontal:20,
        alignItems:'center',
        justifyContent:'center',
    },
    cartIcon:{
        width:HEADR_ICON_SIZE,
    },
    headerText:{
        fontSize:15,
        fontWeight:'500',
        color:'#fff',
    },
});
export default Header;