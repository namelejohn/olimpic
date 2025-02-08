import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Product} from '../types';
import COLORS from '../styles/colors.ts';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import {BORDER_RADIUS} from '../styles/constants.ts';
import FastImage from 'react-native-fast-image';

const ProductCard = ({item}: {item: Product}) => {
  const {productStore} = useStore();
  const {handlePlus} = productStore;

  const handleAddToCart = () => {
    handlePlus(item);
  };

  return (
    <View style={styles.wrapper}>
      <FastImage source={{uri: item.image}} style={styles.image} />
      <View style={styles.card}>
        <View style={styles.titleContainer}>
          <View style={styles.header}>
            <Text style={styles.name} numberOfLines={2}>
              {item.name}
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapper: {
    width: width * 0.4,
    height: width * 0.54,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 12,
    marginBottom: 20,
  },
  card: {},
  image: {
    width: 125,
    height: 85,
    resizeMode: 'cover',
    borderRadius: 10,
    zIndex: 99999,
    alignSelf: 'center',
    marginTop: 10,
  },
  header: {
    alignItems: 'center',
    height: width * 0.17,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textColor,
  },
  name: {
    color: COLORS.textColor,
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
  },
  desc: {
    color: COLORS.grayText,
    fontWeight: '400',
    fontSize: 12,
    marginTop: 4,
  },
  details: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'flex-end',
    paddingHorizontal: 8,
  },
  addButton: {
    padding: 10,
    paddingHorizontal: 14,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 400,
    fontSize: 12,
    color: COLORS.white,
  },
  icon: {
    width: 18,
    height: 18,
  },
  cart: {
    width: 52,
    height: 52,
  },
  weight: {
    color: COLORS.grayText,
  },
  detailContainer: {
    flexDirection: 'row',
  },
  titleContainer: {
    alignItems: 'center',

    paddingVertical: 8,
  },
  priceContainer: {
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS,
  },
});

export default observer(ProductCard);
