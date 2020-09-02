import React, { useEffect, useState } from "react";
import { getStory } from "@/services/hackerNewsApi";

const Story = ({ storyId: id }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(id).then((data) => data && data.url && setStory(data));
  }, []);

  return (
    <>
     {story && <p>{story.by}</p>}
    </>
  );
};

export default Story;
