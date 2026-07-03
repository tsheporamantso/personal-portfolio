import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  test('should render headings', () => {
    expect(screen.getAllByRole('heading')).toHaveLength(3);

    expect(screen.getByText(/hello i'm/i)).toBeInTheDocument();
    expect(screen.getByText(/gladwin tshepo ramantso/i)).toBeInTheDocument();
    expect(screen.getByText(/fullstack developer/i)).toBeInTheDocument();
  });

  test('should render CTA button', () => {
    expect(screen.getByRole('link', { name: /resume/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /let's talk/i }),
    ).toBeInTheDocument();
  });

  test('should render social links with correct hrefs', () => {
    const socialLinks = screen.getAllByRole('link', { name: '' });

    const linkedin = socialLinks.find((link) => {
      return link.getAttribute('href')?.includes('linkedin');
    });
    const github = socialLinks.find((link) => {
      return link.getAttribute('href')?.includes('github');
    });
    const wellfound = socialLinks.find((link) => {
      return link.getAttribute('href')?.includes('wellfound');
    });

    expect(linkedin).toBeInTheDocument();
    expect(github).toBeInTheDocument();
    expect(wellfound).toBeInTheDocument();
  });

  test('should render the headshot image', () => {
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src');
    expect(image).toHaveAttribute('alt', 'me');
  });

  test('should render link that navigates to contact page', () => {
    expect(screen.getByRole('link', { name: /scroll down/i })).toHaveAttribute(
      'href',
      '#contact',
    );
  });
  describe('snapshots', () => {
    test('should render headings snapshot', () => {
      expect(screen.getAllByRole('heading')).toMatchSnapshot();
    });

    it('should render image snapshot', () => {
      expect(screen.getByRole('img')).toMatchSnapshot();
    });

    it('should render nav link snapshot correctly', () => {
      expect(
        screen.getByRole('link', { name: /scroll down/i }),
      ).toMatchSnapshot();
    });

    it('should render CTA buttons snapshot', () => {
      const ctaButtons = [
        screen.getByRole('link', { name: /resume/i }),
        screen.getByRole('link', { name: /let's talk/i }),
      ];
      expect(ctaButtons).toMatchSnapshot();
    });

    it('should render social links snapshot', () => {
      const socialLinks = screen.getAllByRole('link', { name: '' });
      expect(socialLinks).toMatchSnapshot();
    });
  });
});
