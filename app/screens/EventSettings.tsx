import React from 'react';
import {
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {observer} from 'mobx-react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackgroundContainer from '../components/BackgroundContainer.tsx';
import {eventData} from '../data/data.ts';
import {Event} from '../types';
import COLORS from '../styles/colors.ts';

interface MenuScreenProps {
  navigation: any;
}

const eventImages: any = {
  0: require('../assets/event1.png'),
  1: require('../assets/event2.png'),
  2: require('../assets/event3.png'),
  3: require('../assets/event4.png'),
};

const EventSettings: React.FC<MenuScreenProps> = props => {
  function navToEvent(id: number) {
    props.navigation.navigate('Event', {id});
  }

  function renderItem({item, index}: {item: Event; index: number}) {
    return (
      <Pressable onPress={() => navToEvent(item.id)}>
        <ImageBackground
          style={styles.cardContainer}
          source={eventImages[item.id]}>
          {index === 0 && (
            <View style={styles.topContainer}>
              <Text style={styles.top}>Top</Text>
            </View>
          )}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subtitle}>
                {item.date}
                {' | '}
              </Text>
              <Text style={styles.subtitle}>{item.time}</Text>
            </View>
          </View>
        </ImageBackground>
      </Pressable>
    );
  }

  return (
    <BackgroundContainer>
      <SafeAreaView edges={['left', 'right']} style={styles.mainContainer}>
        <View style={styles.menuContainer}>
          <FlatList
            data={eventData}
            keyExtractor={(_, index: number) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.flatlistContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </BackgroundContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  menuContainer: {
    flex: 1,
  },
  flatlistContainer: {
    paddingTop: 50,
    paddingBottom: 100,
    marginHorizontal: 20,
  },
  subtitle: {
    marginTop: 4,
    color: COLORS.primary,
    fontSize: 10,
    fontWeight: 600,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLORS.red,
    width: '100%',
    paddingVertical: 10,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  cardContainer: {
    width: '100%',
    height: 190,
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
  },
  title: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 600,
  },
  top: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: 600,
  },
  topContainer: {
    backgroundColor: COLORS.red,
    paddingVertical: 4,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default observer(EventSettings);
