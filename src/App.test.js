import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { SEOProvider } from './context/SEOContext';
import App from './App';

const renderWithProviders = (ui) => {
  return render(
    <HelmetProvider>
      <SEOProvider>
        {ui}
      </SEOProvider>
    </HelmetProvider>
  );
};

test('renders app title', () => {
  renderWithProviders(<App />);
  const titleElement = screen.getByText(/Laurentiu Marian/i);
  expect(titleElement).toBeInTheDocument();
});