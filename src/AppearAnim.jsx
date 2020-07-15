import React, { useRef } from 'react';
import {
  Animated,
} from 'react-native';

// eslint-disable-next-line import/prefer-default-export
export const AppearAnim = (props) => {
  const appearAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(
      appearAnim, {
        toValue: 1,
        duration: 10000,
      },
    ).start();
  }, []);

  return (
    <Animated.View style={{
      ...props.style,
      opacity: appearAnim,
    }}
    >
      {props.children}
    </Animated.View>
  );
};
