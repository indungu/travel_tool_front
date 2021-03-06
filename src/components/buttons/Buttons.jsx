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
class Button extends PureComponent {
  render() {
    const {
      imageSrc,
      buttonClass,
      buttonId,
      altText,
      imageClass,
      text,
      textClass,
      onClick
    } = this.props;
    return (
      <button type="button" className={buttonClass} onClick={onClick} id={buttonId}>
        <img src={imageSrc} alt={altText} className={imageClass} />
        <span className={textClass}>
          {text}           
        </span>
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
  text: PropTypes.string,
  textClass: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  buttonClass: 'mdl-button',
  imageClass: 'mdl-Icon',
  altText: 'Dropdown Icon',
  buttonId: 'demo-menu',
  text:'Login to Get Started',
  textClass: '',
  onClick: null

};

export default Button;
