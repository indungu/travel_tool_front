import React, { Component } from 'react';

class RequestHeaderTop extends Component{
    render(){
        return(
            // request header panel top part
          <div className="NewRequests">
            <div>
              <span className="requests">
                REQUESTS
              </span>
            </div>
            <div>
              <button type="button" className="NewRequestButton">
                <span className="NewRequestButtonText">
                  New Request
                </span>
              </button>
            </div>
          </div>
        )
    }
}

export default RequestHeaderTop;