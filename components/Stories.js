import { Story } from '@/components';

const Stories = ({ count, stories }) => {
  return (
    <div>
      {stories.slice(0, count).map((storyId) => <Story key={storyId} storyId={storyId} />)}
    </div>
  )
};


export default Stories;
