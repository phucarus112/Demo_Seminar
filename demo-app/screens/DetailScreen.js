import * as React from 'react'
import { TouchableOpacity, Image, View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import TouchableScale from 'react-native-touchable-scale';
// Packages
import { SharedElement } from 'react-navigation-shared-element';

// Icons
import { Feather } from '@expo/vector-icons'

const DetailScreen = (props) => {

  const { width, height } = Dimensions.get('window')
  const { data } = props.route.params;
  
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View>
        <SharedElement id={`item.${data.id}.photo`} >
          <Image source={{ uri: data.image }} style={{ width: '100%', height: height - 450, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} resizeMode="cover" />
        </SharedElement>

        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', bottom: 14, left: 10 }}>
        <TouchableScale
          activeScale={0.9}
          tension={50}
          friction={7}
          useNativeDriver
          onPress={()=>{
            props.navigation.push("ZoomScreen", {data: data.profilePic});
          }}>
          <SharedElement id={`item.${data.id}.profilePic`}>
            <Image
              source={{ uri: data.profilePic }}
              style={{ width: 60, height: 60, borderRadius: 10, marginRight: 14 }}
              resizeMode="cover" />
          </SharedElement>
        </TouchableScale>

          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20 }}>
            <View>
              <SharedElement id={`item.${data.id}.username`}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{data.username}</Text>
              </SharedElement>
              <SharedElement id={`item.${data.id}.readtime`}>
                <Text style={{ color: 'white', fontSize: 14, }}>{data.readtime}</Text>
              </SharedElement>
            </View>
            <TouchableOpacity>
              <Feather name='bookmark' size={24} color='white' />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView style={{ paddingHorizontal: 10, paddingTop: 14 }}>
        <SharedElement id={`item.${data.id}.text`} style={{ width: width - 30, marginBottom: 14 }}>
          <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold', lineHeight: 32 }}>{data.title}</Text>
        </SharedElement>
        <TouchableOpacity style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
          <Feather name='heart' size={16} color='orange' />
          <Text style={{ fontWeight: 'normal', textAlign: 'center', marginHorizontal: 10 }}>3.4K đã xem</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 14, lineHeight: 28, textAlign: 'justify', opacity: 0.5 }}>{data.content}
        </Text>
      </ScrollView>
      <View style={{ position: 'absolute', top: 40, left: 10 }}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Feather name='arrow-left' size={24} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
  caption: {
    fontSize: 20,
    opacity: 0.5,
  },
  image: {
    width: 200,
    height: 160,
    resizeMode: 'contain',
  },
});

export default DetailScreen;

