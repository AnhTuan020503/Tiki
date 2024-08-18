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
import Header from '../components/HeaderComponent';
const ProfileItem=({icon,name})=>(
    <View style={styles.itemContainer}>
        <MaterialIcons name={icon} size={26} color="#1e1e1e"/>
        <Text style={[styles.itemText,{marginLeft: icon ? 20 : 0}]}>{name}</Text>
        <FontAwesome name="angle-right" size={26} color="#1e1e1e"/>
    </View>
);
const ProfileScreen =()=>{
    return(
        <View style={styles.screenContainer}>
            <StatusBar barStyle="dark-content"/>
            {/*  */}
                <Header title="Cá Nhân"/>
            {/*  */}
            <View style={styles.bodyContainer}>
                <ScrollView>
                <View style={styles.userContainer}>
                    <View style={styles.avatarContainer}>
                        <MaterialIcons name="person" size={26} color="#fff"/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.welcomeText}>Chao mung ban den voi tiki</Text>
                        <Text style={styles.authText}>Dang nhap/Dang ky</Text>
                    </View>
                    <FontAwesome name="angle-right" size={26} color="#1e88e5"/>
                </View>
               {/*  */}
               <View style={styles.divider}/>
                <ProfileItem icon="format-list-bulleted" name="Quan ly don hang" />
                <ProfileItem icon="shopping-cart" name="San pham da mua" />
                <ProfileItem icon="remove-red-eye" name="San pham da xem" />
                <ProfileItem icon="heart-broken" name="San pham yeu thich" />
                <ProfileItem icon="bookmark-outline" name="San pham mua sau" />
                <ProfileItem icon="star-outline" name="San pham danh gia" />
               {/*  */}
               <View style={styles.divider}/>
               <ProfileItem name="Uu dai cho chu the ngan hang"/>
               <ProfileItem name="Cai dat"/>
               {/*  */}
               <View style={styles.divider}/>
               <ProfileItem icon="headphones" name="Ho Tro"/>
               </ScrollView>
            </View>
                
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer:{
        flex:1,
    },
    bodyContainer:{
        flex:1,
        backgroundColor:'#ededed',
    },
    userContainer:{
        backgroundColor:'#fff',
        flexDirection:'row',
        paddingHorizontal:20,
        paddingVertical:22,
        alignItems:'center',
    },
    avatarContainer:{
        width:50,
        height:50,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#1e88e5',
    },
    textContainer:{
        flex:1,
        marginLeft:20,
    },
    welcomeText:{
        color:'#828282',
    },
    authText:{
        color:'#1e88e5',
        fontSize:18,
        fontWeight:'500',
    },
    itemContainer:{
        backgroundColor:'#fff',
        flexDirection:'row',
        paddingHorizontal:20,
        paddingVertical:10,
        alignItems:'center',
    },
    itemText:{
        flex:1,
        color:'#1e1e1e',
        paddingLeft:10,
    },
    divider:{
        height:10,
    },

});
export default ProfileScreen;