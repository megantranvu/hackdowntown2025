import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';



export default function messageScreen() {
  return (
    // creating images of raids (NOTE: update the image with your own path)
    <Image source={require('@/assets/images/menu-message.png')} style={{ alignSelf: 'center' , width:"100%", height:"100%", position: 'absolute', top:10
         }}/>    
    // <ParallaxScrollView
    //   // creating the header (NOTE: update the image with your own path) 
    //   headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
    //   headerImage={
    //     <Image source={require('@/assets/images/uvacity.jpg')} style={{ alignSelf: 'center' , width:"90%", height:"100%"}}/>
    //   }>
    //   // Creating the title
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText 
    //     type="title">Messages</ThemedText>
    //   </ThemedView>
 
    //   // creating images of raids (NOTE: update the image with your own path)
    //   <Image source={require('@/assets/images/menu-message.png')} style={{ alignSelf: 'center'}}/>
    
    // </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
// import { Image, View, Button } from "react-native";
// import React from 'react';


// export default function messageScreen() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#f9faf2",
//       }}
//     >
         <Image source={require('@/assets/images/menu-message.png')} style={{ alignSelf: 'center' , width:"100%", height:"100%", position: 'absolute', top:10
         }}/>
//      </View>
//    );
