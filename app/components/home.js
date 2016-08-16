import React from 'react';

import Footer from './common-ui/footer';
import LinkButton from './common-ui/button-link';

export default () => {
  return (
    <div>
      <LinkButton link="/login" text="Home" />
      <Footer />
    </div>
  )
}
