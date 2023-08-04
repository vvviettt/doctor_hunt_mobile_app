import {Image} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {ImageNetworkProps} from './ImageNetwork.style';

const ImageNetwork: FC<ImageNetworkProps> = React.memo(props => {
  const [isError, setError] = useState(false);
  const {url, errorSource, style} = props;
  useEffect(() => {
    setError(false);
  }, [props]);

  return (
    <Image
      style={[{resizeMode: 'cover'}, style]}
      onError={() => setError(true)}
      source={!isError ? {uri: url} : errorSource}
    />
  );
});

export default ImageNetwork;
