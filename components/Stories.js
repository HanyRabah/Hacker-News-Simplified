import { Story, Loader } from '@/components';
import styled from 'styled-components';

const Stories = ({ loading, count, stories }) => {
  return (
    <>
      {stories.slice(0, count).map((storyId) => <Story key={storyId} storyId={storyId} />)}
      {loading  &&  <LoaderWrapper><Loader /></LoaderWrapper>}
    </>
  )
};

const LoaderWrapper = styled.div`
  padding: 20px 0;
`


export default Stories;
