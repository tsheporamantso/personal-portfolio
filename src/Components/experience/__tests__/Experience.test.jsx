import { screen, render, waitFor } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Experience from '../Experience';
// import API from '../../../utils/api';

jest.mock('../../../utils/api', () => ({
  experience: 'https://example.com/api/experience',
}));

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

const createTestQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
};

const renderWithClient = (ui) => {
  const queryClient = createTestQueryClient();
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
  );
};

describe('Experience Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should render heading correctly', () => {
    mockedAxios.mockResolvedValueOnce({ data: { experiences: [] } });
    renderWithClient(<Experience />);
    expect(
      screen.getByRole('heading', { name: /skills /i, level: 5 }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /my experience/i }),
    ).toBeInTheDocument();
  });

  test('should not show error message initially, only show once request failed', async () => {
    mockedAxios.mockRejectedValueOnce(new Error('Network Error'));

    renderWithClient(<Experience />);

    expect(
      screen.queryByRole('heading', { name: /network error/i, level: 2 }),
    ).not.toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: /network error/i }),
      ).toBeInTheDocument();
    });
  });
});
