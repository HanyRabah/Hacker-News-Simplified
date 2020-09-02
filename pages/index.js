import { useEffect, useState } from 'react';
import { getStoriesIds } from '@/services/hackerNewsApi';
import useInfiniteScroll from '@/hooks/useScrollLoading';
import Stories from '@/components/Stories';

const App = () => {
  const { count } = useInfiniteScroll();
  const [ storyIds, setStoryIds ] = useState([]);
  
  useEffect(() => {
    getStoriesIds().then(ids => setStoryIds(ids));
  }, []);

  return <Stories stories={storyIds} count={count} />
}

export default App
