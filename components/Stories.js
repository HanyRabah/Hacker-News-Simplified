import { Story } from '@/components';

const Stories = ({ stories }) => {
  return (
    <div>
      {stories.map((storyId) => <Story key={storyId} storyId={storyId} />)}
    </div>
  )
};


export default Stories;
