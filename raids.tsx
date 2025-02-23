import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';



export default function raidScreen() {
  return (
    
    <ParallaxScrollView
      // creating the header
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image source={require('@/assets/images/uvacity.jpg')} style={{ alignSelf: 'center' }} />
      }>
      // Creating the title
      <ThemedView style={styles.titleContainer}>
        <ThemedText 
        type="title">Quests</ThemedText>
      </ThemedView>
      // Making a subheader
      <ThemedText>Join a local clean-up quest!</ThemedText>
      // Creating an interface similar to a filter
      <Collapsible title="Filter">
        <ThemedText> ☐ All </ThemedText>
        <ThemedText> ☐ Joined </ThemedText>
      </Collapsible>

      // creating images of quests (NOTE: update the image with your own path)
      <Image source={require('@/assets/images/raid1Updated.png')} style={{ alignSelf: 'center' }} />
      <Image source={require('@/assets/images/raid2Updated.png')} style={{ alignSelf: 'center' }} />
    
    </ParallaxScrollView>
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
