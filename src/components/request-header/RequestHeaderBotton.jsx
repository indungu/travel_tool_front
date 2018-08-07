import React, { PureComponent } from 'react';
import RequestHeaderBottomLeftSection from './RequestHeaderBottomLeftSection';
import RequestHeaderBottomRightSection from './RequestHeaderBottomRightSection';

class RequestHeaderBottom extends PureComponent{

    render(){

        return(

          <div className="OpenRequests">
            <RequestHeaderBottomLeftSection />  
            <RequestHeaderBottomRightSection />
          </div>
        )
    }
}

export default RequestHeaderBottom;