import { useEffect, useState } from 'react';
import { getTopStoriesIds } from '@/services/hackerNewsApi';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import Stories from '@/components/Stories';

const App = () => {
  const { count } = useInfiniteScroll();
  const [ storyIds, setStoryIds ] = useState([]);
  
  useEffect(() => {
    getTopStoriesIds().then(ids => setStoryIds(ids));
  }, []);

  return <Stories stories={storyIds} count={count} />
}

export default App
