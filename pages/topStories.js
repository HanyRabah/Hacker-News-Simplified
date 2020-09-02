import { useEffect, useState } from 'react';
import { getTopStoriesIds } from '@/services/hackerNewsApi';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import Stories from '@/components/Stories';

const App = () => {
  const { count, loading } = useInfiniteScroll();
  const [ pageLoading, setPageLoading ] = useState(false);
  const [ storyIds, setStoryIds ] = useState([]);
  
  useEffect(() => {
    setPageLoading(true)
    getTopStoriesIds().then(ids => {
      setStoryIds(ids)
      setPageLoading(false);
    });
  }, []);

  return <Stories stories={storyIds} count={count} loading={loading || pageLoading} />
}

export default App
