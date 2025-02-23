// import { StyleSheet, Image, Platform } from 'react-native';

// import { Collapsible } from '@/components/Collapsible';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';



// export default function profileScreen() {
//   return (
    
//     <ParallaxScrollView
//       // creating the header (NOTE: update the image with your own path) 
//       headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
//       headerImage={
//         <Image source={require('@/assets/images/uvacity.jpg')} style={{ alignSelf: 'center' }} />
//       }>
//       // Creating the title
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText 
//         type="title">My Profile</ThemedText>
//       </ThemedView>
 
//       // creating images of raids (NOTE: update the image with your own path)
//       <Image source={require('@/assets/images/raid1Updated.png')} style={{ alignSelf: 'center' }} />
//       <Image source={require('@/assets/images/raid2Updated.png')} style={{ alignSelf: 'center' }} />
    
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   headerImage: {
//     color: '#808080',
//     bottom: -90,
//     left: -35,
//     position: 'absolute',
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     gap: 8,
//   },
// });

import { Image, View } from "react-native";


export default function profileScreen() {
  return (
    <Image source={require('@/assets/images/profile-screen.png')} style={{ alignSelf: 'center' , width:"90%", height:"100%"}}/>


  );
}


