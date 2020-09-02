import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import App from '@/pages/index';
import { storyIds, singularStory } from '@/fixtures';
import { getStory, getStoriesIds } from '@/services/hackerNewsApi';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { STORY_INCREMENT } from '@/constants';

beforeEach(cleanup);

jest.mock('../hooks/useInfiniteScroll.js');

jest.mock('../services/hackerNewsApi', () => ({
  getStory: jest.fn(),
  getStoriesIds: jest.fn(),
}));

test('renders the application', async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));
  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getStoriesIds.mockImplementation(() => Promise.resolve(storyIds));

  const { getByText, queryByTestId } = render(<App />);

  await waitFor(() => [
    expect(getByText('Tarnished: Google Responds')).toBeTruthy(),
    expect(queryByTestId('story-by').textContent).toEqual('Hany'),
  ]);
});
