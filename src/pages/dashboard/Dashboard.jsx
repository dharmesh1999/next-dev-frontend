import React from 'react';
import Footer from '../../components/common/footer/Footer';
import Header from '../../components/common/header/Header';
import Landing from '../../components/common/landing/Landing';

function Dashboard() {
  return (
    <>
      <div style={{ height: '100vh' }}>
        <Header />
        <Landing />
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
