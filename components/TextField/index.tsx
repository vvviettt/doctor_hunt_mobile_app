import {TextInput, View} from 'react-native';
import React, {FC} from 'react';
import {TextFieldProps} from './TextField.type';
import styles from './TextField.style';
import {colors} from '../../constant/styles/colors';

const TextField: FC<TextFieldProps> = ({
  value,
  onChange,
  placeholder,
  prefixIcon,
}) => {
  return (
    <View style={styles.wrapper}>
      {prefixIcon}
      {prefixIcon && <View style={styles.space} />}
      <TextInput
        style={styles.textField}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
      />
    </View>
  );
};

export default TextField;
