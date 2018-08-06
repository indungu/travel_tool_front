import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import './_Requests.scss';


/**
 * @description Class for rendering requests in a table
 *
 * @class Requests
 *
 * @extends PureComponent
 */
class Requests extends PureComponent {
  /**
   * @memberof Requests
   *
   * @description Renders  a div when there are no requests
   *
   * @returns {Node}
   */
  renderNoRequests() {
    return (
      <div className="table__requests--empty">
        You have no requests at the moment
      </div>
    );
  }

  /**
   * @memberof Requests
   *
   * @description Renders the status of a request
   *
   * @param {Object} request Request to be rendered
   *
   * @returns {Node}
   */
  renderRequestStatus(request) {
    return (
      <div>
        <div
          id={`status-${request.id}`}
          className={
            request.status === 'Open'
              ? 'request__status--open'
              : request.status === 'Rejected'
              ? 'request__status--rejected'
              : 'request__status--approved'
          }
        >
          {request.status}
        </div>
        <span className="table__request-menu">
          <i className="fa fa-ellipsis-v" />
        </span>
      </div>
    );
  }

  /**
   * @memberof Requests
   *
   * @description Renders a request in the table
   *
   * @param {Object} request Request to be rendered
   *
   * @returns {Node}
   */
  renderRequest(request) {
    return (
      <tr key={request.id} className="table__row">
        <td className="mdl-data-table__cell--non-numeric table__requests__destination table__data">
          {request.destination}
        </td>
        <td className="mdl-data-table__cell--non-numeric table__data">
          {request.origin}
        </td>
        <td className="mdl-data-table__cell--non-numeric table__data">
          {request.duration}
        </td>
        <td className="mdl-data-table__cell--non-numeric table__data">
          {request.startDate}
        </td>
        <td className="mdl-data-table__cell--non-numeric table__requests__status table__data">
          { this.renderRequestStatus(request) }
        </td>
      </tr>
    );
  }

  /**
   * @memberof Requests
   *
   * @description Renders the headings of the tablet
   *
   * @returns {Node}
   */
  renderTableHead() {
    return (
      <tr>
        <th className="mdl-data-table__cell--non-numeric table__head">
          Destination
        </th>
        <th className="mdl-data-table__cell--non-numeric table__head">
          Origin
        </th>
        <th className="mdl-data-table__cell--non-numeric table__head">
          Duration
        </th>
        <th className="mdl-data-table__cell--non-numeric table__head">
          Start Date
        </th>
        <th className="mdl-data-table__cell--non-numeric table__head">
          Status
        </th>
      </tr>
    );
  }

  render() {
    const { requests } = this.props;
    return (
      <div className="table__container">
        {
          requests.length ? (
            <table className="mdl-data-table mdl-js-data-table table__requests">
              <thead>
                { this.renderTableHead() }
              </thead>
              <tbody className="table__body">
                { requests.map(request => this.renderRequest(request)) }
              </tbody>
            </table>
          )
          : this.renderNoRequests()
        }
      </div>
    );
  }
}

Requests.propTypes = {
  requests: propTypes.array.isRequired
};

export default Requests;

