import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="guilds"
        options={{
          title: 'My Guilds',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'shield' : 'shield-outline'} color={"black"} size={24} />
          ),
        }}
      />      
      <Tabs.Screen
        name="index"
        options={{
          title: 'My Rewards',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'diamond' : 'diamond-outline'} color={"black"} size={24} />
          ),      
        }}
      />

      <Tabs.Screen name="raids" options={{
        title: 'My Quests',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'star' : 'star-outline'} color={"black"} size={24} />
        ),  
        }}
      />
      <Tabs.Screen name="my_messages" options={{
        title: 'My Messages',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'chatbubble-ellipses-outline' : 'chatbubble-outline'} color={"black"} size={24} />
        ),
        }}
      />
      
      <Tabs.Screen name="my_profile" options={{
        title: 'My Profile',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'happy' : 'happy-outline'} color={"black"} size={24} />
        ),
        }}
      />
    </Tabs>
  );
}
