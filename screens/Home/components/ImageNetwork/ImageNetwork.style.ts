import {ImageSourcePropType, ImageStyle, StyleProp} from 'react-native';

export interface ImageNetworkProps {
  url: string;
  errorSource: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}
