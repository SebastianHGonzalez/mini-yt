import styled from 'styled-components';
import Carousel, { CarouselListItem } from '../carousel/Carousel';


export const PostListItem = styled(CarouselListItem)`
  flex-basis: auto;
  margin-inline-end: 4px;
`;

const PostList = styled(Carousel).attrs({ listItemComponent: PostListItem })``;

export default PostList;
