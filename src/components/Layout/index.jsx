import React from 'react';
import { TypographyStyle, GoogleFont } from 'react-typography';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalStyle, PlayStateProvider, Container, SEO } from '../../shared';
import typography from '../../theme/typography';

const Head = ({ title, description }) => (
  <>
    <GlobalStyle />
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    <SEO title={title} description={description} />
  </>
);

export const Layout = ({ children, ...rest }) => {
  return (
    <PlayStateProvider>
      <Head {...rest} />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </PlayStateProvider>
  );
};

export default React.memo(Layout);
