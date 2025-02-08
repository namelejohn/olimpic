import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import FastImage from 'react-native-fast-image';
import {observer} from 'mobx-react';
import {useStore} from '../stores/StoreContext';
import QuantitySelector from './QuantitySelector';
import COLORS from '../styles/colors';
import {FONT_WEIGHT} from '../styles/constants';
import {Product} from '../types';

interface ItemViewProps {
  item: Product;
}

const CartItem: React.FC<ItemViewProps> = ({item}) => {
  const {productStore} = useStore();
  const {handleMinus, handlePlus, removeFromCart} = productStore;
  const quantity = productStore.getItemQuantity(item.id);

  const renderRightActions = () => {
    return (
      <Pressable
        style={styles.deleteContainer}
        onPress={() => removeFromCart(item.id)}>
        <Image source={require('../assets/remove.png')} />
      </Pressable>
    );
  };

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      overshootFriction={8}
      overshootRight={false}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <FastImage
            source={{uri: item.image}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>

          <View style={styles.actionsContainer}>
            <QuantitySelector
              isHorizontal={false}
              value={quantity}
              plus={() => handlePlus(item)}
              minus={() => handleMinus(item.id)}
            />
          </View>

          <View style={styles.totalContainer}>
            <Text style={styles.total}>${item.price - item.discount}</Text>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: COLORS.cardBg,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  imageContainer: {
    width: '25%',
  },
  image: {
    width: 100,
    height: 90,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  contentContainer: {
    width: '74%',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '60%',
    height: 90,
    paddingLeft: 20,
    paddingTop: 6,
  },
  name: {
    fontSize: 16,
    fontWeight: FONT_WEIGHT,
    color: COLORS.black,
  },
  price: {
    color: COLORS.textColor,
    fontWeight: FONT_WEIGHT,
    marginTop: 10,
  },
  total: {
    color: COLORS.textColor,
    fontWeight: FONT_WEIGHT,
  },
  actionsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    height: 90,
  },
  totalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    height: 90,
  },
  deleteContainer: {
    backgroundColor: COLORS.red,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    marginBottom: 20,
    borderRadius: 16,
  },
  deleteIcon: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default observer(CartItem);
