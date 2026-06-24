import { render, screen } from '@testing-library/react';

import About from './About';

describe('renders the component correctly', () => {
  test('it renders the main heading and subheading correctly', () => {
    render(<About />);

    const heading = screen.getByText(/get to know/i);
    expect(heading).not.toBeNull();

    const subHeading = screen.getByText(/about me/i);
    expect(subHeading).toBeTruthy();
  });
  test('it render the headshot image with correct alt text', () => {
    render(<About />);
    const image = screen.getByAltText(/about me/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
  });
});
