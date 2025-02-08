import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import COLORS from '../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackgroundContainer from '../components/BackgroundContainer.tsx';
import {INPUT_BORDER_RADIUS} from '../styles/constants.ts';
import StyledInput from '../components/StyledInput.tsx';

const ContactUs = ({navigation}: any) => {
  const handleSubmit = () => {
    navigation.navigate('Menu');
  };

  return (
    <BackgroundContainer>
      <SafeAreaView edges={['left', 'right']} style={styles.container}>
        <Formik
          initialValues={{
            phone: '',
            address: '',
            date: '',
            index: '',
          }}
          onSubmit={handleSubmit}>
          {({handleChange, handleSubmit, values, errors, touched}) => (
            <View style={styles.formContainer}>
              <StyledInput
                label={'Number'}
                placeholder="Number"
                value={values.phone}
                onChangeText={handleChange('phone')}
              />
              <StyledInput
                label={'Address'}
                placeholder="Address"
                value={values.address}
                onChangeText={handleChange('address')}
              />
              <StyledInput
                label={'Date'}
                placeholder="Date"
                value={values.date}
                onChangeText={handleChange('date')}
              />
              <StyledInput
                label={'Index'}
                placeholder="Index"
                value={values.index}
                onChangeText={handleChange('index')}
              />
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </BackgroundContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    padding: 15,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },

  messageInput: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 15,
  },
  error: {
    color: COLORS.error,
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 20,
  },
  buttonContainer: {
    alignSelf: 'center',
    marginBottom: 50,
  },
  headerText: {
    fontSize: 40,
    fontWeight: '900',
    color: COLORS.white,
    marginLeft: 20,
    marginVertical: 20,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    color: COLORS.white,
    opacity: 0.5,
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 6,
    borderRadius: 12,
    paddingHorizontal: 8,
  },
  inputContainer: {
    height: 55,
    borderRadius: INPUT_BORDER_RADIUS,
    borderColor: COLORS.secondary,
    overflow: 'hidden',
    paddingHorizontal: 10,
    backgroundColor: COLORS.inputBg,
  },
  input: {
    flex: 1,
    color: COLORS.black,
    paddingHorizontal: 20,
    fontStyle: 'italic',
  },
  topTitle: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 20,
  },
  icon: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  iconContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
    zIndex: -1,
  },
});

export default ContactUs;
