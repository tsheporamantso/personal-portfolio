// @ts-nocheck
import { within, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { toast } from 'react-toastify';
import Contact from '../Contact';
import API from '../../../utils/api';

jest.mock('react-toastify', () => ({
  toast: {
    loading: jest.fn(),
    update: jest.fn(),
  },
}));

jest.mock('../../../utils/api', () => ({
  contacts: 'https://example.com/api/contacts',
}));

describe('Contact Component', () => {
  beforeEach(() => {
    render(<Contact />);
    jest.clearAllMocks();
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const fillForm = async () => {
    const user = userEvent.setup();
    const [nameInput, emailInput, messageInput] =
      screen.getAllByRole('textbox');

    await user.type(nameInput, 'Gladwin Tshepo Ramantso');
    await user.type(emailInput, 'gladwin@example.com');
    await user.type(messageInput, 'Hi I would like to connect');

    return user;
  };

  test('should render three articles with correct text', () => {
    const articlesContainer = screen.getByTestId('articles');
    const links = within(articlesContainer).getAllByRole('link');

    expect(links).toHaveLength(3);
    expect(links[0]).toHaveAttribute(
      'href',
      'mailto:tshepo.ramantso@outlook.com',
    );
    expect(links[1]).toHaveAttribute(
      'href',
      'https://m.me/profile.php?id=100000171080452',
    );
    expect(links[2]).toHaveAttribute(
      'href',
      'https://api.whatsapp.com/send?phone=27651443709',
    );

    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
      expect(link).toHaveTextContent(/send a message/i);
    });
  });
  test('form inputs should be blank initially', () => {
    const formInputs = screen.getAllByRole('textbox');

    expect(formInputs[0]).toHaveAttribute('name', 'name');
    expect(formInputs[1]).toHaveAttribute('name', 'email');
    expect(formInputs[2]).toHaveAttribute('name', 'message');

    formInputs.forEach((input) => {
      expect(input).toHaveValue('');
      expect(input).toHaveAttribute('required');
    });
  });

  test('should render submit button', () => {
    expect(
      screen.getByRole('button', { name: /send message/i }),
    ).toBeInTheDocument();
  });

  test('should load toast immediately on submit', async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => ({ success: true, msg: 'Message sent!' }),
    });
    toast.loading.mockReturnValue('toast-id-1');

    const user = await fillForm();
    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(toast.loading).toHaveBeenCalledWith('Sending message...');
    expect(toast.loading).toHaveBeenCalledTimes(1);
  });

  test('should call the API with the correct payload on submit', async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => ({ success: true, msg: 'Message sent!' }),
    });
    toast.loading.mockReturnValue('toast-id-1');

    const user = await fillForm();
    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

    expect(global.fetch).toHaveBeenCalledWith(
      API.contacts,
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Gladwin Tshepo Ramantso',
          email: 'gladwin@example.com',
          message: 'Hi I would like to connect',
        }),
      }),
    );
  });

  test('shows success toast and reset the form when API returns success', async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => ({ success: true, msg: 'Message sent!' }),
    });
    toast.loading.mockReturnValue('toast-id-success');

    const user = await fillForm();
    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(toast.update).toHaveBeenCalledWith(
        'toast-id-success',
        expect.objectContaining({
          render: 'Message sent!',
          type: 'success',
          isLoading: false,
          autoClose: 3000,
        }),
      );
    });
    const [nameInput, emailInput, messageInput] =
      screen.getAllByRole('textbox');

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(messageInput).toHaveValue('');
  });
  test('shows error toast and does not reset the form when API returns success: false', async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => ({ success: false, msg: 'Invalid email address' }),
    });
    toast.loading.mockReturnValue('toast-id-fail');

    const user = await fillForm();
    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(toast.update).toHaveBeenCalledWith(
        'toast-id-fail',
        expect.objectContaining({
          render: 'Invalid email address',
          type: 'error',
          isLoading: false,
          autoClose: 3000,
        }),
      );
    });

    const [nameInput] = screen.getAllByRole('textbox');
    expect(nameInput).toHaveValue('Gladwin Tshepo Ramantso');
  });
  test('shows a generic "Server Error" toast when the fetch call throws', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Network down'));
    toast.loading.mockReturnValue('toast-id-network');

    const user = await fillForm();
    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(toast.update).toHaveBeenCalledWith(
        'toast-id-network',
        expect.objectContaining({
          render: 'Server Error',
          type: 'error',
          isLoading: false,
          autoClose: 3000,
        }),
      );
    });
  });
});
