import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import {
  Animated,
  ViewPropTypes,
} from 'react-native';

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

AppearAnim.propTypes = {
  style: ViewPropTypes.style.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
