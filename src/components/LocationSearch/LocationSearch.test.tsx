
import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LocationSearch from './LocationSearch';

describe('LocationSearch', () => {
  const onLocationSelectMock = jest.fn();

  beforeEach(() => {
    render(<LocationSearch onLocationSelect={onLocationSelectMock} />);
  });

  it('renders the search input', () => {
    const searchInput = screen.getByPlaceholderText(/search location/i);
    expect(searchInput).toBeInTheDocument();
  });

  it('calls onLocationSelect when a location is selected', () => {
    const searchInput = screen.getByPlaceholderText(/search location/i);
    act(() => {
      userEvent.type(searchInput, 'Neu-Ulm');
    });
    const option = screen.getByText(/Neu-Ulm/i);

    act(() => {
      userEvent.click(option);
    });

    expect(onLocationSelectMock).toHaveBeenCalled();
  });

  it('selects the correct location', () => {
    const searchInput = screen.getByPlaceholderText(/search location/i);
    
    act(() => {
      userEvent.type(searchInput, 'Neu-Ulm');
    });
    const option = screen.queryByText('Neu-Ulm');
    
    act(() => {
      option && userEvent.click(option);
    });

    const expectedLocation = {
      name: 'Neu-Ulm',
      latitude: 48.4,
      longitude: 10.0167
    };
    expect(onLocationSelectMock).toHaveBeenCalledWith(expectedLocation);
    expect(searchInput).toHaveValue(expectedLocation.name);
  });
});