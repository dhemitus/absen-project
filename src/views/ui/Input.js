import React from "react";
import { StyleSheet } from "react-native";
import PropTypes from 'prop-types';

import { Input, Icon } from "galio-framework";

//import { argonTheme } from '../constants';
import { Themes } from '../../constants'

class ArInput extends React.Component {
  render() {
    const { shadowless, success, error } = this.props;

    const inputStyles = [
      styles.input,
      !shadowless && styles.shadow,
      success && styles.success,
      error && styles.error,
      {...this.props.style}
    ];

    return (
      <Input
        placeholder="write something here"
        placeholderTextColor={Themes.COLORS.MUTED}
        style={inputStyles}
        color={Themes.COLORS.HEADER}
        iconContent={
          <Icon
            size={14}
            color={Themes.COLORS.ICON}
            name="link"
            family="AntDesign"
          />
        }
        {...this.props}
      />
    );
  }
}

ArInput.defaultProps = {
  shadowless: false,
  success: false,
  error: false
};

ArInput.propTypes = {
  shadowless: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 4,
    borderColor: Themes.COLORS.BORDER,
    height: 44,
    backgroundColor: '#FFFFFF'
  },
  success: {
    borderColor: Themes.COLORS.INPUT_SUCCESS,
  },
  error: {
    borderColor: Themes.COLORS.INPUT_ERROR,
  },
  shadow: {
    shadowColor: Themes.COLORS.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 2,
  }
});

export default ArInput;
