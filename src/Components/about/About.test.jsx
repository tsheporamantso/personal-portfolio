import { render, screen } from '@testing-library/react';

import About from './About';

describe('About component', () => {
  test('should renders the main heading and subheading correctly', () => {
    render(<About />);

    const heading = screen.getByRole('heading', {
      name: /get to know/i,
      level: 5,
    });
    expect(heading).not.toBeNull();

    const subHeading = screen.getByRole('heading', {
      name: /about me/i,
      level: 2,
    });
    expect(subHeading).toBeTruthy();
  });
  test('should render the headshot image with correct alt text', () => {
    render(<About />);
    const image = screen.getByAltText(/about me/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
  });
});
