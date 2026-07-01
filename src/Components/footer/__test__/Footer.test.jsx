import { render, screen, within } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer component', () => {
  test('should render nav links and social media icons', () => {
    render(<Footer />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();

    const footerLogo = screen.getByRole('link', { name: /gladwin/i });
    expect(footerLogo).toBeInTheDocument();
    expect(footerLogo).toHaveAttribute('href', '#home');

    const links = screen.getAllByRole('listitem');
    expect(links).toHaveLength(7);
    links.forEach((link) => {
      expect(link).toBeInTheDocument();
    });

    const socialContainer = screen.getByTestId('footer-socials');
    const socialLinks = within(socialContainer).getAllByRole('link');

    expect(socialLinks).toHaveLength(3);

    expect(socialLinks[0]).toHaveAttribute('href', 'https://facebook.com/');
    expect(socialLinks[1]).toHaveAttribute(
      'href',
      'https://twitter.com/ramgt001',
    );
    expect(socialLinks[2]).toHaveAttribute(
      'href',
      'https://www.instagram.com/',
    );
  });

  test('should have copyright text', () => {
    render(<Footer />);

    expect(screen.getByText(/gladwin tshepo ramantso/i)).toBeInTheDocument();
  });
});
