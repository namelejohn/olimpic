import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import PrimaryButton from '../components/PrimaryButton.tsx';
import COLORS from '../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackgroundContainer from '../components/BackgroundContainer.tsx';
import {INPUT_BORDER_RADIUS} from '../styles/constants.ts';
import StyledInput from '../components/StyledInput.tsx';

const ReservationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  table: Yup.string().required('Required'),
  time: Yup.string().required('Required'),
  date: Yup.string().required('Required'),
});

const ReservationForm = ({navigation}: any) => {
  const handleSubmit = () => {
    navigation.navigate('ReservationSuccessScreen');
  };

  return (
    <BackgroundContainer>
      <SafeAreaView edges={['left', 'right']} style={styles.container}>
        <Formik
          initialValues={{
            name: '',
            phone: '',
            table: '',
            time: '',
            date: '',
          }}
          validationSchema={ReservationSchema}
          onSubmit={handleSubmit}>
          {({handleChange, values, setFieldValue, isValid}) => {
            const isFormFilled = Object.values(values).every(
              value => value !== '',
            );

            return (
              <>
                <View style={styles.formContainer}>
                  <StyledInput
                    label={'Name'}
                    placeholder={'Enter name'}
                    value={values.name}
                    onChangeText={handleChange('name')}
                  />
                  <StyledInput
                    label={'Phone number'}
                    placeholder={'Enter phone number'}
                    value={values.phone}
                    onChangeText={handleChange('phone')}
                  />
                  <StyledInput
                    label={'Table number'}
                    placeholder={'Enter table number'}
                    value={values.table}
                    onChangeText={handleChange('table')}
                  />
                  <StyledInput
                    label={'Indicate time of the visit'}
                    placeholder={'Enter time'}
                    value={values.time}
                    onChangeText={handleChange('time')}
                  />
                  <StyledInput
                    label={'Date'}
                    placeholder={'Enter date'}
                    value={values.date}
                    onChangeText={handleChange('date')}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <PrimaryButton
                    isDisabled={!isFormFilled && !isValid}
                    title="Reservation"
                    onPress={handleSubmit}
                  />
                </View>
              </>
            );
          }}
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
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    color: COLORS.white,
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
  error: {
    color: COLORS.error,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 16,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  tablesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableButton: {
    backgroundColor: COLORS.white,
    padding: 25,
    paddingHorizontal: 28,
    borderRadius: 20,
  },
  tableButtonActive: {
    backgroundColor: COLORS.primary,
  },
  tableButtonText: {
    color: COLORS.black,
    fontWeight: '700',
  },
  title: {
    color: COLORS.black,
    fontSize: 28,
    fontWeight: 600,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 20,
  },
});

export default ReservationForm;
