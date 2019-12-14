import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

function PageHeader({ className }) {
  return <header className={className}>header</header>;
}

PageHeader.propTypes = {
  className: string,
};

PageHeader.defaultProps = {
  className: undefined,
};

export default styled(PageHeader)`
  grid-area: header;
`;
