import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';



export default function rewardsScreen() {
  return (
    // creating images of raids (NOTE: update the image with your own path)
<   Image source={require('@/assets/images/all-reward.png')} style={{ alignSelf: 'center' , width:"100%", height:"100%", position: 'absolute', top:15
    }}/> 
  );
}


