import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import COLORS from '../styles/colors.ts';

interface CustomInputProps extends TextInputProps {
  label: string;
}

const StyledInput: React.FC<CustomInputProps> = ({label, ...props}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          {...props}
          style={styles.input}
          placeholderTextColor={'rgba(16, 16, 16, 0.5)'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: 500,
    color: COLORS.black,
    marginLeft: 10,
    marginBottom: 6,
    alignSelf: 'flex-start',
    borderRadius: 24,
    padding: 6,
    paddingVertical: 2,
    zIndex: 99999,
  },
  inputContainer: {
    justifyContent: 'center',
    height: 47,
    borderRadius: 33,
    backgroundColor: COLORS.primary,
  },
  input: {
    fontSize: 16,
    color: COLORS.textColor,
    paddingBottom: 8,
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
});

export default StyledInput;
