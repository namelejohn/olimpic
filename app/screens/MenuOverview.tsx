import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackgroundContainer from '../components/BackgroundContainer.tsx';
import KorzinaButton from '../components/CartButton.tsx';
import {useNavigation, useRoute} from '@react-navigation/native';
import {BTN_FONT_WEIGHT} from '../styles/constants.ts';

interface MenuScreenProps {
  navigation: any;
}

const MenuOverview: React.FC<MenuScreenProps> = props => {
  return (
    <BackgroundContainer isMenu>
      <SafeAreaView edges={['top']} style={styles.mainContainer}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: COLORS.white,
            textAlign: 'center',
            marginTop: 30,
          }}>
          Olimpic
        </Text>
        <View style={styles.menuContainer}>
          <View style={styles.menuItemContainer}>
            <ItemButton title={'Menu'} targetScreen={'Shop'} />
            <ItemButton title={'Reservation'} targetScreen={'Reservation'} />
            <ItemButton title={'Loyalty card'} targetScreen={'Bonus'} />
            <ItemButton title={'Contacts'} targetScreen={'Contacts'} />
            <ItemButton title={'Events'} targetScreen={'Events'} />
          </View>
        </View>
        <View
          style={{paddingBottom: 40, alignSelf: 'flex-end', paddingRight: 40}}>
          <KorzinaButton iconSize={70} />
        </View>
      </SafeAreaView>
    </BackgroundContainer>
  );
};

const ItemButton = ({
  title,
  targetScreen,
}: {
  title: string;
  targetScreen: string;
  bgColor?: string;
}) => {
  const navigation: any = useNavigation();
  const route = useRoute();
  const getPreviousRouteName = () => {
    const navigationState = navigation.getState();
    const routes = navigationState.routes;
    const currentIndex = navigationState.index;

    // Проверяем, есть ли предыдущий роут
    if (currentIndex > 0) {
      return routes[currentIndex - 1].name;
    }
    return null;
  };

  const previousRouteName = getPreviousRouteName();

  const isActive =
    route.name === targetScreen || previousRouteName === targetScreen;

  return (
    <Pressable
      style={styles.menuItem}
      onPress={() => navigation.navigate(targetScreen)}>
      <Text style={[styles.menuText, isActive && {color: COLORS.red}]}>
        {title}
      </Text>
    </Pressable>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 1,
    color: COLORS.white,
    textAlign: 'center',
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItem: {
    backgroundColor: COLORS.buttonBg,
    width: width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginBottom: 14,
    paddingVertical: 15,
  },
  menuText: {
    color: COLORS.textColor,
    fontWeight: BTN_FONT_WEIGHT,
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  icon: {
    width: 90,
    height: 90,
  },
  iconContainer: {
    alignItems: 'flex-end',
    marginBottom: 60,
    marginRight: 20,
  },
  counter: {
    backgroundColor: COLORS.secondary,
    padding: 3,
    paddingHorizontal: 7,
    borderRadius: 100,
    position: 'relative',
    bottom: width * 0.08,
    right: 5,
  },
  counterText: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: '600',
  },
  emptyContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  profileTitleContainer: {
    backgroundColor: COLORS.transparentBg,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,
  },
  editBtn: {
    backgroundColor: COLORS.white,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginTop: 12,
    marginBottom: 30,
    alignSelf: 'flex-end',
  },
  emptyText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
  },
  goBasketButton: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: COLORS.white,
    borderRadius: 12,
  },
  goBasketTitle: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '700',
  },
  emptyText1: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 700,
    opacity: 0.5,
  },
  emptyText2: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 500,
    marginTop: 8,
  },
  emptyTextContainer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  menuItemContainer: {
    alignItems: 'center',
  },
});

export default observer(MenuOverview);
