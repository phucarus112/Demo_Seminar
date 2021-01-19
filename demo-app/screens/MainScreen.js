import * as React from 'react'
import { Image, Text, View, FlatList, Dimensions, StyleSheet, ScrollView } from 'react-native'
// Packages
import { SharedElement } from 'react-navigation-shared-element';
import TouchableScale from 'react-native-touchable-scale';
//Sample Data
import { data, profile, } from '../data'

const MainScreen = ({ navigation }) => {

  const { width, height } = Dimensions.get('window')

  return (
    <View >
      <ScrollView>
        <View style={{ marginTop: 40, marginBottom: 30, paddingHorizontal: 30, }}>
          <View>
            <Text style={{ fontSize: 14, fontWeight: '700', color: 'orange', textTransform: 'uppercase' }}>{profile.date}</Text>
            <Text style={{ fontSize: 36, fontWeight: 'bold' }}>Article</Text>
          </View>
        </View>
        <View>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            style={{ margin: 20 }}
            renderItem={({ item }) => {
              return (
                <View>
                  <View style={{ marginBottom: 20, }}>
                    <TouchableScale
                      activeScale={0.9}
                      tension={50}
                      friction={7}
                      useNativeDriver
                      onPress={() => navigation.push('DetailScreen', { data: item })} >
                      <SharedElement id={`item.${item.id}.photo`}>
                        <Image
                          source={{ uri: item.image }}
                          style={{ width: width - 40, height: height - 450, borderRadius: 14, }}
                          resizeMode="cover" />
                      </SharedElement>
                      <SharedElement id={`item.${item.id}.text`} style={{ width: width - 90, position: 'absolute', bottom: 90, left: 10, paddingHorizontal: 10 }}>
                        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', lineHeight: 28 }}>{item.title}</Text>
                      </SharedElement>
                      <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', bottom: 20, left: 20, }}>
                        <SharedElement id={`item.${item.id}.profilePic`}>
                          <Image
                            source={{ uri: item.profilePic }}
                            style={{ width: 50, height: 50, borderRadius: 10, marginRight: 14 }}
                            resizeMode="cover" />
                        </SharedElement>
                        <View>
                          <SharedElement id={`item.${item.id}.username`}>
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{item.username}</Text>
                          </SharedElement>
                          <SharedElement id={`item.${item.id}.readtime`}>
                            <Text style={{ color: 'white', fontSize: 14, }}>{item.readtime}</Text>
                          </SharedElement>
                        </View>
                      </View>
                    </TouchableScale>
                  </View>
                </View>
              )
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default MainScreen;