import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup, waitFor } from '@testing-library/react';
import Story from '@/components/Story';
import { singularStory } from '@/fixtures';
import { getStory } from '@/services/hackerNewsApi';
import { theme } from '@/styles/theme';

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

jest.mock('../services/hackerNewsApi', () => ({
  getStory: jest.fn(),
}));

test('renders the story component with content', async () => {
  
  // 1. setup (e.g. generate data, use mock data, other setup)
  getStory.mockImplementation(() => Promise.resolve(singularStory));
  
  // 2. call function/method
  const { getByText, getByTestId } = render(<ThemeProvider theme={theme}><Story storyId="1" /></ThemeProvider>);
  
  // 3. do assertsions or check
  await waitFor(() => [
    expect(getByTestId('story')).toBeTruthy(),
    expect(getByText('Tarnished: Google Responds')).toBeTruthy(),
    expect(getByTestId('story-by').textContent).toEqual('Hany'),
  ]);
});
