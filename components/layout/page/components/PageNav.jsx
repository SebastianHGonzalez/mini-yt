import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

function PageNav({ className }) {
  return <nav className={className}>nav</nav>;
}

PageNav.propTypes = {
  className: string,
};

PageNav.defaultProps = {
  className: undefined,
};

export default styled(PageNav)`
  grid-area: nav;
`;
