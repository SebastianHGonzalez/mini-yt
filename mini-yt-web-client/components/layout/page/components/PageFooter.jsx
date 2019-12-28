import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

function PageFooter({ className }) {
  return <footer className={className}>footer</footer>;
}

PageFooter.propTypes = {
  className: string,
};

PageFooter.defaultProps = {
  className: undefined,
};

export default styled(PageFooter)`
  grid-area: footer;
`;
