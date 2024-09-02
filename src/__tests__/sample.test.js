import App from '../App';
import { within } from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const consoleSpy = jest.spyOn(console, 'log').mockImplementation(jest.fn());

test('Company input field should function properly', async () => {
  const { getByTestId } = render(<App />);

  const companyInput = getByTestId('company');

  userEvent.clear(companyInput);
  userEvent.type(companyInput, 'Test Company');

  const resumePreview = getByTestId('resume-preview');
  within(resumePreview).getByText('Company: Test Company');
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

test('If we enter some skills and then just update the efficiency then it should not re-render the resume preview', () => {
  const { getByTestId } = render(<App />);

  const skillNameInput1 = getByTestId('skill-name-input-0');
  const efficiencySelector1 = getByTestId('efficiency-selector-0');
  userEvent.type(skillNameInput1, 'skill 1');
  userEvent.selectOptions(efficiencySelector1, '1');

  const addSkillButton = getByTestId('add-skill-button');
  userEvent.click(addSkillButton);

  const skillNameInput2 = getByTestId('skill-name-input-1');
  const efficiencySelector2 = getByTestId('efficiency-selector-1');
  userEvent.type(skillNameInput2, 'skill 2');
  userEvent.selectOptions(efficiencySelector2, '8');

  consoleSpy.mockClear();

  userEvent.selectOptions(efficiencySelector1, '10');

  expect(consoleSpy).toHaveBeenCalledTimes(4);
});
