import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import About from './About';
import useSpeech from '../../hooks/useSpeech';

jest.mock('../../hooks/useSpeech', () => jest.fn());

const mockUseSpeech = jest.mocked(useSpeech);

const defaultSpeechMock = {
  toggle: jest.fn(),
  stop: jest.fn(),
  speak: jest.fn(),
  pause: jest.fn(),
  resume: jest.fn(),
  isPaused: false,
  isSpeaking: false,
};

describe('About component - speech button', () => {
  beforeEach(() => {
    mockUseSpeech.mockReturnValue(defaultSpeechMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('shows "Listen" on initial render', () => {
    render(<About />);
    expect(screen.getByRole('button', { name: /listen/i })).toBeInTheDocument();
  });

  test('calls toggle when button is clicked', async () => {
    const user = userEvent.setup();
    const toggleMock = jest.fn();

    mockUseSpeech.mockReturnValue({ ...defaultSpeechMock, toggle: toggleMock });

    render(<About />);
    await user.click(screen.getByRole('button', { name: /listen/i }));

    expect(toggleMock).toHaveBeenCalledTimes(1);
  });

  test('shows "Pause" when isSpeaking is true and isPaused is false', () => {
    mockUseSpeech.mockReturnValue({
      ...defaultSpeechMock,
      isSpeaking: true,
      isPaused: false,
    });

    render(<About />);
    expect(screen.getByRole('button', { name: /pause/i })).toBeInTheDocument();
  });

  test('shows "Resume" when isSpeaking and isPaused are both true', () => {
    mockUseSpeech.mockReturnValue({
      ...defaultSpeechMock,
      isSpeaking: true,
      isPaused: true,
    });

    render(<About />);
    expect(screen.getByRole('button', { name: /resume/i })).toBeInTheDocument();
  });

  test('stop button is disabled when not speaking', () => {
    render(<About />);
    expect(screen.getByRole('button', { name: /stop/i })).toBeDisabled();
  });

  test('stop button is enabled when speaking', () => {
    mockUseSpeech.mockReturnValue({ ...defaultSpeechMock, isSpeaking: true });

    render(<About />);
    expect(screen.getByRole('button', { name: /stop/i })).toBeEnabled();
  });
});
