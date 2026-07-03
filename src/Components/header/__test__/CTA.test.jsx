import { screen, render } from '@testing-library/react';
import CTA from '../CTA';

describe('Call To Action buttons', () => {
  beforeEach(() => {
    render(<CTA />);
  });

  test('should render nav link that download resume', () => {
    const resumeLink = screen.getByRole('link', { name: /resume/i });

    expect(resumeLink).toBeInTheDocument();
    expect(resumeLink).toHaveAttribute(
      'href',
      expect.stringContaining('Resume'),
    );
    expect(resumeLink).toHaveAttribute('download');
  });
  test('should render nav link that navigates to contacts page', () => {
    const contactsLink = screen.getByRole('link', { name: /let's talk/i });

    expect(contactsLink).toBeInTheDocument();
    expect(contactsLink).toHaveAttribute('href', '#contact');
  });
  describe('snapshots', () => {
    test('should render navigation links snapshot', () => {
      const links = screen.getAllByRole('link');
      expect(links).toMatchSnapshot();
    });
  });
});
