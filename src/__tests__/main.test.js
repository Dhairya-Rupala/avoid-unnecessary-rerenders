import App from '../App';
import { within } from '@testing-library/dom';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const consoleSpy = jest.spyOn(console, 'log').mockImplementation(jest.fn());

test('1', async () => {
  const { getByTestId } = render(<App />);

  const firstNameInput = getByTestId('first-name');
  const lastNameInput = getByTestId('last-name');
  const companyInput = getByTestId('company');
  const roleInput = getByTestId('role');

  userEvent.clear(firstNameInput);
  userEvent.type(firstNameInput, 'Alex');

  userEvent.clear(lastNameInput);
  userEvent.type(lastNameInput, 'Grey');

  userEvent.clear(companyInput);
  userEvent.type(companyInput, 'Tech Corp');

  userEvent.clear(roleInput);
  userEvent.type(roleInput, 'QA');

  const businessPreviewCard = getByTestId('business-card-preview');

  await waitFor(() => {
    within(businessPreviewCard).getByText('Alex Grey');
    within(businessPreviewCard).getByText('Company: Tech Corp');
    within(businessPreviewCard).getByText('Role: QA');
  });
});

test('2', () => {
  consoleSpy.mockClear();
  const { getByTestId } = render(<App />);

  consoleSpy.mockClear();
  const firstNameInput = getByTestId('first-name');
  userEvent.type(firstNameInput, 'x');

  expect(consoleSpy).toHaveBeenCalledTimes(4);

  consoleSpy.mockClear();
  const companyInput = getByTestId('company');
  userEvent.type(companyInput, 'y');

  expect(consoleSpy).toHaveBeenCalledTimes(4);
});

test('3', () => {
  consoleSpy.mockClear();
  const { getByTestId } = render(<App />);

  consoleSpy.mockClear();
  const changeHeaderColorButton = getByTestId('change-header-color-button');
  userEvent.click(changeHeaderColorButton);

  expect(consoleSpy).toHaveBeenCalledTimes(1);
});

test('4', () => {
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
