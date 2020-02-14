import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Banner } from './styles';
import ContentBox from '../../components/ContentBox';

export default function PreviousBox() {
  return (
    <>
      <Banner>
        <Header />
      </Banner>
      <ContentBox />
      <Footer />
    </>
  );
}
