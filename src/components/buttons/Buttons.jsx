import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

/**
 * @description - Contains Button component
 *
 * @class Button
 *
 * @extends {PureComponent}
 *
 */
class Button extends React.PureComponent {
  render() {
    const {
      imageSrc,
      buttonClass,
      buttonId,
      altText,
      imageClass,
      text
    } = this.props;
    return (
      <button type="button" className={buttonClass} id={buttonId}>
        <img src={imageSrc} alt={altText} className={imageClass} />
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  buttonClass: PropTypes.string,
  buttonId: PropTypes.string,
  altText: PropTypes.string,
  imageClass: PropTypes.string,
  text:PropTypes.string
};

Button.defaultProps = {
  buttonClass: 'mdl-button',
  imageClass: 'mdl-Icon',
  altText: 'Dropdown Icon',
  buttonId: 'demo-menu',
  text:'Login to Get Started'
};

export default Button;
