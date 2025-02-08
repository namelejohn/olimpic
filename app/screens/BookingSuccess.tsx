import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PrimaryButton from '../components/PrimaryButton.tsx';
import COLORS from '../styles/colors.ts';
import BackgroundContainer from '../components/BackgroundContainer.tsx';
import {BORDER_RADIUS} from '../styles/constants.ts';

const BookingSuccess = ({navigation}: any) => {
  const navToMain = () => {
    navigation.navigate('Menu');
  };

  return (
    <BackgroundContainer>
      <SafeAreaView edges={['left', 'right']} style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>
            {'Your reservation has been\nsuccessfully placed!'}
          </Text>
          <Image
            source={require('../assets/success.png')}
            style={{width: 250, height: 220, resizeMode: 'contain'}}
          />
        </View>
      </SafeAreaView>
      <PrimaryButton
        onPress={navToMain}
        title={'Back to menu'}
        containerStyle={styles.buttonContainer}
      />
    </BackgroundContainer>
  );
};

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
  },
  title: {
    fontSize: 24,
    fontWeight: 400,
    textAlign: 'center',
    color: COLORS.textColor,
    marginTop: 100,
    marginBottom: 40,
  },
  icon: {
    width: 280,
    height: 200,
    position: 'absolute',
    top: height / 5,
    left: width / 8,
  },
  buttonContainer: {
    marginBottom: 50,
    alignSelf: 'center',
  },
  contentContainer: {
    borderRadius: BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  linearContainer: {
    alignItems: 'center',
  },
  imgContainer: {
    alignSelf: 'center',
  },
  catImg: {
    width: 400,
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    right: -180,
    transform: [{rotate: '-20deg'}],
  },
});

export default BookingSuccess;
