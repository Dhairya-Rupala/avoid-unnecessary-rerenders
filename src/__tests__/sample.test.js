import App from '../App';
import { within } from '@testing-library/dom';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

test('App should generate the business card preview based on user form details', async () => {
  const { getByTestId } = render(<App />);

  const firstNameInput = getByTestId('first-name');
  const lastNameInput = getByTestId('last-name');
  const companyInput = getByTestId('company');
  const roleInput = getByTestId('role');

  userEvent.type(firstNameInput, 'Test First Name');
  userEvent.type(lastNameInput, 'Test Last Name');
  userEvent.type(companyInput, 'Test Company');
  userEvent.type(roleInput, 'Test Role');

  const businessPreviewCard = getByTestId('business-card-preview');

  await waitFor(() => {
    within(businessPreviewCard).getByText('Test First Name Test Last Name');
    within(businessPreviewCard).getByText('Company: Test Company');
    within(businessPreviewCard).getByText('Role: Test Role');
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
