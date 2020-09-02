import React, { useEffect, useState, memo} from "react";
import { getStory } from "@/services/hackerNewsApi";
import { timeMapping } from "@/utils/timeMapping";
import styled from "styled-components";

const Story = memo(({ storyId: id }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(id).then((data) => data && data.url && setStory(data));
  }, []);

  return (
    <>
     {story && story.url && 
      <StoryWrapper data-testid="story">
          <StoryTitle href={story.url} target="_blank" alt={story.title}>
            <StoryTitleText>{story.title}</StoryTitleText>
          </StoryTitle>
        <StoryMeta>
          <StoryMetaItem>
              <Icon src="/icons/time.png" alt="time" />
              {timeMapping(story.time)}
            </StoryMetaItem>
          <StoryMetaItem>
            <Icon src="/icons/profile.png" alt="username" />
            <span data-testid="story-by">{story.by}</span>
          </StoryMetaItem>
          <StoryMetaItem>
            <Icon src="/icons/likes.png" alt="score" />
            {story.score}
          </StoryMetaItem>
          <StoryMetaItem>
          <Icon src="/icons/comments.png" alt="comments" />
          {story.comments}
          </StoryMetaItem>
        </StoryMeta>
      </StoryWrapper>
     }
    </>
  );
});

const StoryTitle = styled.a`
  text-decoration: none;
  color: #333;
  margin-bottom: 1em;
  display: block;
`;

const StoryTitleText = styled.h5`
  font-size: 20px;
  font-weight: bold;
`;

const StoryMeta = styled.div`
  display: flex;
`
const StoryMetaItem = styled.div`
  padding: 0.25em;
  margin-right: 2em;
  font-size: 14px;
  width: 120px;
  height: 30px;
  display: flex;
  align-items: center;
  color: gray;
`

const Icon = styled.span`
  width: 24px;
  height: 24px;
  display: block;
  background: url(${props => props.src && props.src});
  background-size: cover;
  margin-right: .5em;
`;
const StoryWrapper = styled.div`
  border-bottom: 1px solid #eee;
  padding: 1.5em;
  &:hover {
    background: #eee;
    ${StoryTitleText} {
      color: #FF6C47;
    }
  }
`;

export default Story;
