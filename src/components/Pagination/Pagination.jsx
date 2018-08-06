import React, { PureComponent } from 'react';
import './_Pagination.scss';
import PropTypes from 'prop-types';

/**
 * @description Class representing pagination component
 *
 * @class Pagination
 *
 * @extends PureComponent
 */
class Pagination extends PureComponent {
  /**
   * @memberof Pagination
   *
   * @description Renders pagination buttons
   *
   * @param {Number} id Button's id
   * @param {boolean} disabled Button's condition for disabled
   * @param {Number} page page to be fetched on button click
   * @param {String} direction direction of navigation - previous or next
   *
   * @returns {Node}
  */
  renderButton(id, disabled, page, direction) {
    const { onPageChange } = this.props;
    return (
      <button
        id={id}
        className="pagination__button"
        type="button"
        disabled={disabled}
        onClick={() => onPageChange(page)}>
        { direction }
      </button>
    );
  }


  /**
   * @memberof Pagination
   *
   * @description Renders current page and total pages
   *
   * @param {Number} currentPage
   * @param {Number} pageCount Total number of pages
   *
   * @returns {Node}
  */
  renderPage(currentPage, pageCount) {
    return (
      <div className="pagination__items">
        <span className="pagination__page">
          Page
        </span>
        <div className="pagination__current-page" id="current-page">
          { currentPage }
        </div>
          of
        <span className="pagination__all-pages" id="page-count">
          { pageCount }
        </span>
      </div>
    );
  }

  render() {
    const { currentPage, pageCount } = this.props;
    const previousButtonDisabled = currentPage === 1 ? true: false;
    const nextButtonDisabled = currentPage === pageCount ? true: false;
    const previousPage = currentPage - 1;
    const nextPage = currentPage + 1;

    return (
      <div>
        {
          pageCount > 0 ? (
            <div className="pagination">
              { this.renderButton('previous-button', previousButtonDisabled, previousPage, 'Previous') }
              { this.renderPage(currentPage, pageCount) }
              { this.renderButton('next-button', nextButtonDisabled, nextPage, 'Next') }
            </div>
          )
          : null
        }
      </div>
    );
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
