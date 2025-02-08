import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import BackgroundContainer from '../components/BackgroundContainer.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';
import {eventData} from '../data/data.ts';

interface MenuScreenProps {
  navigation: any;
  route: any;
}

const eventImages: any = {
  0: require('../assets/event1.png'),
  1: require('../assets/event2.png'),
  2: require('../assets/event3.png'),
  3: require('../assets/event4.png'),
};

const EventInfo: React.FC<MenuScreenProps> = props => {
  const {params} = props.route;
  const id = params?.id;
  const item = eventData[id];
  return (
    <BackgroundContainer>
      <SafeAreaView edges={['left', 'right']} style={styles.safeArea}>
        <Image style={styles.image} source={eventImages[id]} />
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.date}</Text>
            <Text style={styles.thirdTitle}>{item.time}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.about}>About</Text>
          <Text style={styles.text}>{eventData[id].detail}</Text>
        </View>
      </SafeAreaView>
    </BackgroundContainer>
  );
};

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 40,
  },
  image: {
    width: '100%',
    height: width * 0.8,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  text: {
    fontSize: 12,
    fontWeight: 400,
    color: '#5A5A5A',
    textAlign: 'justify',
    marginHorizontal: 20,
  },
  bottomText: {
    color: COLORS.black,
    fontSize: 12,
    fontWeight: 500,
    marginBottom: 20,
  },
  titleContainer: {
    position: 'absolute',
    bottom: -30,
    backgroundColor: COLORS.white,
    width: '90%',
    paddingVertical: 10,
    borderRadius: 16,
    paddingLeft: 20,
    alignSelf: 'center',
  },
  title: {
    color: COLORS.textColor,
    fontSize: 18,
    fontWeight: 500,
  },
  subtitle: {
    marginTop: 4,
    color: '#8D8D8D',
    fontSize: 12,
    fontWeight: 600,
  },
  thirdTitle: {
    marginTop: 4,
    color: '#6564DB',
    fontSize: 14,
    fontWeight: 500,
  },
  about: {
    fontWeight: 700,
    color: COLORS.textColor,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default observer(EventInfo);
