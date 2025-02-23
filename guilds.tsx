import { Image, View } from "react-native";


export default function guildScreen() {
  return (
    <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f9faf2",
          }}
        >
        <Image source={require('@/assets/images/guilds.png')} style={{ alignSelf: 'center' , width:"100%", height:"95%", position: 'absolute', top:20
        }}/>
    </View>
  );
}
