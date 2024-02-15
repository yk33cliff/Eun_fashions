import React from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashMaker = () => {
  return (
    <View>
      <LinearGradient
        colors={['#FED9B7', '#F07167']}
        start={{x: 0, y: 0}} // bottom right
        end={{x: 1, y: 1}} // top left
        locations={[0, 0.9]} // Adjust this to control the gradient spreadout
        style={{
          backgroundColor: 'orange',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/images/splash_img.png')}
          style={{width: 300, height: 300}}
        />
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center', // Align text to center
            marginTop: 20, // Add some top margin
          }}>
          It's all about {'\n'}
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 48,
            textAlign: 'center', // Align text to center
          }}>
          fashion
        </Text>
      </LinearGradient>
    </View>
  );
};

export default SplashMaker;
