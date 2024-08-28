import App from '../App';
import { within } from '@testing-library/dom';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const consoleSpy = jest.spyOn(console, 'log').mockImplementation(jest.fn());

test('Company input field should function properly', async () => {
  const { getByTestId } = render(<App />);

  const companyInput = getByTestId('company');

  userEvent.type(companyInput, 'Test Company');

  const businessPreviewCard = getByTestId('business-card-preview');

  await waitFor(() => {
    within(businessPreviewCard).getByText('Company: Test Company');
  });
});

test('Changing header color should change the background color of the header', () => {
  const { getByTestId } = render(<App />);

  const header = getByTestId('header');
  expect(header).toHaveAttribute('style', 'background-color: black;');

  const changeHeaderColorButton = getByTestId('change-header-color-button');
  userEvent.click(changeHeaderColorButton);
  expect(header).toHaveAttribute('style', 'background-color: red;');

  userEvent.click(changeHeaderColorButton);
  expect(header).toHaveAttribute('style', 'background-color: grey;');

  userEvent.click(changeHeaderColorButton);
  expect(header).toHaveAttribute('style', 'background-color: dodgerBlue;');
});

test('Changing header color should only re-render the header', () => {
  consoleSpy.mockClear();
  const { getByTestId } = render(<App />);

  consoleSpy.mockClear();
  const changeHeaderColorButton = getByTestId('change-header-color-button');
  userEvent.click(changeHeaderColorButton);

  expect(consoleSpy).toHaveBeenCalledTimes(1);
});
