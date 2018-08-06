import React, { Component } from  'react';
import Requests from '../../components/Requests/Requests';
import Pagination from '../../components/Pagination/Pagination';
import requestsData from '../../components/Requests/requestsData';
import './_index.scss';

/**
 * @description Class representing Requests page
 *
 * @class RequestsPage
 *
 * @extends Component
 */
class RequestsPage extends Component {

  /**
   * @memberof RequestsPage
   *
   * @description Function that is called to fetch a new page
   *
   * @param {Number} Page Page to be fetched
   *
   * @returns {void}
   */
  // FIX: Remove console statement and replace with actual function
  onPageChange(page){
    console.log(' a new function', page); /*eslint-disable-line */
  }

  render() {
    const { requests, pagination } = requestsData;
    return(
      <div>
        <Requests requests={requests} />
        <Pagination
          currentPage={pagination.currentPage}
          pageCount={pagination.pageCount}
          onPageChange={this.onPageChange}
        />
      </div>
    );
  }
}

export default RequestsPage;

