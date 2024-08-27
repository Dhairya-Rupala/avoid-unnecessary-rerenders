import App from '../App';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const consoleSpy = jest.spyOn(console, 'log').mockImplementation(jest.fn());

test('Changing user info should only rerender user form and the field which is changed', () => {
  consoleSpy.mockClear();
  const { getByTestId } = render(<App />);

  const firstNameInput = getByTestId('first-name');
  userEvent.type(firstNameInput, 'x');

  expect(consoleSpy).toHaveBeenCalledTimes(3);
});

test('Changing header color should only rerender header', () => {
  consoleSpy.mockClear();
  const { getByTestId } = render(<App />);

  const changeHeaderColorButton = getByTestId('change-header-color-button');
  userEvent.click(changeHeaderColorButton);

  expect(consoleSpy).toHaveBeenCalledTimes(1);
});
