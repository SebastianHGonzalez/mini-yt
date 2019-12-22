import React, { Children, useRef } from 'react';
import { node, elementType } from 'prop-types';
import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  display: block;
  position: relative;
`;

export const CarouselListItem = styled.li`
  flex: 1 0 100%;
`;

export const CarouselList = styled.ul`
  padding: 0;
  margin: 0;
  overflow-y: auto;
  list-style: none;
  display: flex;
  ::-webkit-scrollbar {
    display: none;
  }

  scroll-snap-type: x mandatory;
  scroll-snap-stop: always;

  ${CarouselListItem} {
    scroll-snap-align: center;
  }
  ${CarouselListItem}:first-child {
    scroll-snap-align: start;
  }
  ${CarouselListItem}:last-child {
    scroll-snap-align: end;
  }
`;

export default function Carousel({
  carouselWrapperComponent: Wrapper,
  listComponent: List,
  listItemComponent: ListItem,
  children,
}) {
  const listRef = useRef();

  return (
    <Wrapper>
      <List ref={listRef}>
        {Children.map(children, (child) => (
          <ListItem key={child.key}>{child}</ListItem>
        ))}
      </List>
    </Wrapper>
  );
}

Carousel.propTypes = {
  carouselWrapperComponent: elementType,
  listComponent: elementType,
  listItemComponent: elementType,
  children: node,
};

Carousel.defaultProps = {
  carouselWrapperComponent: CarouselWrapper,
  listComponent: CarouselList,
  listItemComponent: CarouselListItem,
  children: undefined,
};
