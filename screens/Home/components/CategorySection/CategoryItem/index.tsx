import {View} from 'react-native';
import React, {FC} from 'react';
import {ICategoryItem} from './CategoryItem.type';
import styles from './CategoryItem.style';
import {CommonStyles} from '../../../../../constant/styles/styles';

const CategoryItem: FC<ICategoryItem> = ({color, icon, path}) => {
  return (
    <View style={[styles.wrapper, {backgroundColor: color}]}>
      <View style={CommonStyles.z2}>{icon}</View>
      <View
        style={[styles.circle, styles.crr, CommonStyles.borderRadiusFull]}
      />
      <View
        style={[styles.circle, styles.crb, CommonStyles.borderRadiusFull]}
      />
    </View>
  );
};

export default CategoryItem;
