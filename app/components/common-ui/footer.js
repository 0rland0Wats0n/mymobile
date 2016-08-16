import React from 'react';

import FooterElement from './footer-element';
import SocialList from './social-list';

export default () => {
  return (
    <footer className="container-fluid">
      <FooterElement
        heading="Contact Us"
        content="Write us an email"
        contentLink="contact@passporttocollege.org"
        link="/#"
        linkText="faqs"
        other={SocialList} />
      <FooterElement
        heading="Donate"
        content="Extend a helping hand to our progressive students."
        link="/#"
        linkText="donate" />
      <FooterElement
        heading="Join Us"
        content="Become a villager and help touch the lives of young people."
        link="/#"
        linkText="join" />
    </footer>
  )
}
