import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';

import {
  PageHeader, PageNav, PageContent, PageFooter,
} from './components';

function PageLayout({ className, children }) {
  return (
    <div className={className}>
      <PageHeader />
      <PageNav />
      <PageContent>{children}</PageContent>
      <PageFooter />
    </div>
  );
}

PageLayout.propTypes = {
  className: string,
  children: node,
};

PageLayout.defaultProps = {
  className: undefined,
  children: undefined,
};

export default styled(PageLayout)`
  display: grid;
  grid-template-areas: "header header" "nav content" "nav footer";
  grid-template-columns: 3fr 9fr;
  grid-template-rows: 3em auto 3em;
  min-height: 100%;
`;
