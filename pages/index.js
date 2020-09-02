import { useEffect, useState } from 'react';
import { getStoriesIds } from '@/services/hackerNewsApi';
import { Stories } from '@/components';

const App = () => {
  const [ storyIds, setStoryIds ] = useState([]);
  
  useEffect(() => {
    getStoriesIds().then(ids => setStoryIds(ids));
  }, []);

  return <Stories stories={storyIds} />
}

export default App
