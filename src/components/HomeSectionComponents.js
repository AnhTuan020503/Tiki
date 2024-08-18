import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    Image,
  } from 'react-native';
const section_banner = require('../assets/bannertiki.jpeg');
const item_image = require('../assets/iteam_image.jpeg');
const item_image2 = require('../assets/item_image2.jpeg');
const item_image3 = require('../assets/item_image3.jpeg');
const { width } = Dimensions.get('window');

const ProductItem =({image,name,price})=>(
  <View style={styles.itemContainer}>
    <Image source={image} style={styles.itemImage}/>
    <Text style={styles.itemName} numberOfLines={2}>
      {name}
    </Text>
    <Text style={styles.itemPrice}>{price}</Text>
  </View>
);
const HomeSectionComponent =() =>{
    return(
        <View style={styles.sectionContainer}>
             {/* */}
            <Text style={styles.sectionTitle}>Điện thoại - Máy tính bảng</Text>
            <Image source={section_banner} style={styles.sectionImage}/>
             {/* */}
             <ScrollView horizontal={true}>
                <View style={styles.filterContainer}>
                  {/*  */}
                  {[
                    'Tat ca',
                    'Dien thoai SmartPhone',
                    'May tinh bang',
                    'Dien thoai',
                  ].map((e,index)=>(
                    <View 
                        key={index.toString()}
                        style={index===0
                        ?styles.filterActiveButtonContainer
                        :styles.filterInactiveButtonContainer
                        }>
                        <Text style={index===0 
                        ?styles.filterActiveText
                        :styles.filterInactiveText
                        }>{e}</Text>
                    </View>
                  ))}
                  
                </View>
             </ScrollView>
            <ScrollView horizontal={true}>
                <View style={styles.listItemContainer}>
                  {/* <View style={styles.itemContainer}>
                    <Image source={item_image} style={styles.itemImage}/>
                    <Text style={styles.itemName} numberOfLines={2}> Iphone 15 Promax</Text>
                    <Text style={styles.itemPrice} numberOfLines={2}>25.000.000</Text>
                  </View>
                  <View style={styles.itemContainer}>
                    <Image source={item_image2} style={styles.itemImage}/>
                    <Text style={styles.itemName} numberOfLines={2}> Iphone 14 Promax</Text>
                    <Text style={styles.itemPrice} numberOfLines={2}>20.000.000</Text>
                  </View>
                  <View style={styles.itemContainer}>
                    <Image source={item_image3} style={styles.itemImage}/>
                    <Text style={styles.itemName} numberOfLines={2}> Iphone 13 Promax</Text>
                    <Text style={styles.itemPrice} numberOfLines={2}>15.000.000</Text>
                  </View>
                  <View style={styles.itemContainer}>
                    <Image source={item_image3} style={styles.itemImage}/>
                    <Text style={styles.itemName} numberOfLines={2}> Iphone 13 Promax</Text>
                    <Text style={styles.itemPrice} numberOfLines={2}>15.000.000</Text>
                  </View>
                  <View style={styles.itemContainer}>
                    <Image source={item_image3} style={styles.itemImage}/>
                    <Text style={styles.itemName} numberOfLines={2}> Iphone 13 Promax</Text>
                    <Text style={styles.itemPrice} numberOfLines={2}>15.000.000</Text>
                  </View> */}
              
                 {[
                    {image1: item_image, image2: item_image2},
                    {image1: item_image2, image2: item_image3},
                    {image1: item_image3, image2: item_image},
                    {image1: item_image3, image2: item_image2},
                 ].map((e)=>(
                    <View>
                    <ProductItem 
                          name="Iphone 15 Promax"
                          image={e.image1}
                          price="25.000.000"
                      />
                      <ProductItem 
                          name="Iphone 14 Promax"
                          image={e.image2}
                          price="25.000.000"
                      />
                    </View>
                    
                 ))}
                </View>
            </ScrollView>
            <View style={styles.seeMoreContainer}>
                  <Text style={styles.seeMoreText}> XEM THEM 600 SAN PHAM</Text>
            </View>
          </View> 
    );
};
const styles = StyleSheet.create({
    sectionContainer:{
        backgroundColor:'#fff',
        paddingHorizontal:12,
      },
      sectionTitle:{
        fontWeight:'700',
        fontSize:16,
        color:'#2f2f2f',
        marginVertical:12,
      },
      sectionImage:{
        width: width -24,
        height:130,
        borderRadius:4,
      },
      listItemContainer:{
        flexDirection:'row',
        marginTop:20,
      },
      itemContainer:{
        width:80,
       marginHorizontal:12,
      },
      itemImage:{
        width:100,
        height:120,
      },
      itemName:{
        fontSize:14,
        color:'#484848',
        marginVertical:4,
      },
      itemPrice:{
        fontSize:16,
        fontWeight:'500',
        color:'#2a2a2a',
      },
      filterContainer:{
        flexDirection:'row',
        marginTop:10,
      },
      filterActiveButtonContainer:{
        backgroundColor:'#242424',
        paddingHorizontal:12,
        paddingVertical:6,
        borderRadius:5,
        marginRight:10,
      },
      filterInactiveButtonContainer:{
        backgroundColor:'#fff',
        paddingHorizontal:12,
        paddingVertical:6,
        borderRadius:5,
        borderColor:'#5a5a5a',
        borderWidth:1,
        marginRight:10,
      },
      filterActiveText:{
        color:'#fff',
      },
      filterInactiveText:{
        color:'#5a5a5a',
      },
      seeMoreContainer:{
        marginTop:15,
        padding:12,
        borderTopWidth:0.6,
        borderTopColor:'#ededed',
        alignItems:'center',
      },
      seeMoreText:{
        color:'0e45b4',
      },
});
export default HomeSectionComponent;
