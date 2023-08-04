/* eslint-disable react-native/no-inline-styles */
import {ScrollView, View} from 'react-native';
import React from 'react';
import {ICategoryItem} from './CategoryItem/CategoryItem.type';
import CategoryItem from './CategoryItem';
import ToothIcon from '../../../../assets/svg/tooth.svg';
import HeartIcon from '../../../../assets/svg/heart.svg';
import EyeIcon from '../../../../assets/svg/eye.svg';
import CosmeticIcon from '../../../../assets/svg/cosmetic.svg';
import BabyIcon from '../../../../assets/svg/baby.svg';
import VaccineIcon from '../../../../assets/svg/vaccine.svg';
import {colors} from '../../../../constant/styles/colors';
import styles from './CategorySection.style';

const CategorySection = () => {
  const categories: ICategoryItem[] = [
    {
      path: '',
      color: colors.blue,
      icon: <ToothIcon />,
    },
    {
      path: '',
      color: colors.blood,
      icon: <HeartIcon />,
    },
    {
      path: '',
      color: colors.orange,
      icon: <EyeIcon />,
    },
    {
      path: '',
      color: colors.green,
      icon: <BabyIcon />,
    },
    {
      path: '',
      color: colors.pink,
      icon: <CosmeticIcon />,
    },
    {
      path: '',
      color: colors.sky,
      icon: <VaccineIcon />,
    },
  ];
  return (
    <ScrollView
      horizontal
      style={[styles.scrollView]}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {categories.map((category, index) => {
          return <CategoryItem {...category} key={index} />;
        })}
      </View>
    </ScrollView>
  );
};

export default CategorySection;
