import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import COLORS from '../styles/colors';
import {FONT_WEIGHT} from '../styles/constants.ts';

interface HorizontalCounterProps {
  value: number;
  plus: () => void;
  minus: () => void;
  isHorizontal?: boolean;
}

const QuantitySelector: React.FC<HorizontalCounterProps> = ({
  value = 0,
  plus,
  minus,
  isHorizontal = true,
}) => {
  return (
    <View style={[styles.container, isHorizontal && {flexDirection: 'row'}]}>
      <TouchableOpacity
        hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
        onPress={plus}>
        <View style={styles.button}>
          <Image source={require('../assets/up.png')} />
        </View>
      </TouchableOpacity>

      <View style={styles.valueContainer}>
        <Text
          style={[
            styles.valueText,
            isHorizontal && {marginHorizontal: 16, marginVertical: 0},
          ]}>
          {value}
        </Text>
      </View>

      <TouchableOpacity
        hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
        onPress={minus}>
        <View style={styles.button}>
          <Image source={require('../assets/down.png')} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 10,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.red,
  },
  valueContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueText: {
    color: COLORS.textColor,
    fontWeight: FONT_WEIGHT,
  },
  buttonLeft: {},
  leftBtnText: {
    color: COLORS.red,
  },
});

export default QuantitySelector;
