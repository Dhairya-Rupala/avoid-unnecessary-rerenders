import App from '../App';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const consoleSpy = jest.spyOn(console, 'log').mockImplementation(jest.fn());

test('1', async () => {
  const { getByTestId } = render(<App />);

  const firstNameInput = getByTestId('first-name');
  const lastNameInput = getByTestId('last-name');
  const companyInput = getByTestId('company');
  const roleInput = getByTestId('role');

  userEvent.type(firstNameInput, 'Alex');
  userEvent.type(lastNameInput, 'Grey');
  userEvent.type(companyInput, 'Tech Corp');
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

  expect(consoleSpy).toHaveBeenCalledTimes(3);

  consoleSpy.mockClear();
  const companyInput = getByTestId('company');
  userEvent.type(companyInput, 'y');

  expect(consoleSpy).toHaveBeenCalledTimes(3);
});

test('3', () => {
  consoleSpy.mockClear();
  const { getByTestId } = render(<App />);

  consoleSpy.mockClear();
  const changeHeaderColorButton = getByTestId('change-header-color-button');
  userEvent.click(changeHeaderColorButton);

  expect(consoleSpy).toHaveBeenCalledTimes(1);
});
