import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup, waitFor } from '@testing-library/react';
import StoriesContainer from '@/pages/index';
import { storyIds, singularStory } from '@/fixtures';
import { getStory, getStoriesIds } from '@/services/hackerNewsApi';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { STORY_INCREMENT } from '@/constants';
import { theme } from '@/styles/theme';

beforeEach(cleanup);

jest.mock('../hooks/useInfiniteScroll.js');

jest.mock('../services/hackerNewsApi', () => ({
  getStory: jest.fn(),
  getStoriesIds: jest.fn(),
}));

test('renders the story container with a story', async () => {
  
  // 1. setup (e.g. generate data, use mock data, other setup)
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));
  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getStoriesIds.mockImplementation(() => Promise.resolve(storyIds));
  
  // 2. call function/method
  const { getByText, queryByTestId } = render(<ThemeProvider theme={theme}><StoriesContainer /></ThemeProvider>);
  
  // 3. do assertsions or check
  await waitFor(() => [
    expect(getByText('Tarnished: Google Responds')).toBeTruthy(),
    expect(queryByTestId('story-by').textContent).toEqual('Hany'),
  ]);
});
