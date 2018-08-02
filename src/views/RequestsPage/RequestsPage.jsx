import React from 'react';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import './RequestsPage.scss';

const RequestsPage = () => (
  <div>
    <div style={{height: '78px'}}>
      Top bar
    </div>
    <section className="MainWrapper mdl-grid">
      <LeftSideBar />
      <div>
        Requests
      </div>
    </section>
  </div>
);

export default RequestsPage;
