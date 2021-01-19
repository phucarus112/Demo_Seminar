import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    marginTop: 20,
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
  },
});

const ZoomScreen = (props) => {

  const { data } = props.route.params;

  return (
    <React.Fragment>
      <View style={styles.container}>
        <SharedElement id="image" style={StyleSheet.absoluteFill}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: data }}
          />
        </SharedElement>
      </View>
    </React.Fragment>
  )
};

ZoomScreen.sharedElements = (route, otherRoute, showing) => [
  { id: 'image' },
];

export default ZoomScreen;