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

test('If we enter the skills in the different order with the same efficiency it should not re-render the Resume Preview', () => {
  const { getByTestId } = render(<App />);

  const skillNameInput = getByTestId('skill-name-input');
  const efficiencySelector = getByTestId('efficiency-selector');
  const addSkillButton = getByTestId('add-skill-button');
  const clearSkillsButton = getByTestId('clear-skills-button');
  const submitSkillsButton = getByTestId('submit-skills-button');

  userEvent.type(skillNameInput, 'skill 1');
  userEvent.selectOptions(efficiencySelector, '1');
  userEvent.click(addSkillButton);

  userEvent.type(skillNameInput, 'skill 2');
  userEvent.selectOptions(efficiencySelector, '2');
  userEvent.click(addSkillButton);
  consoleSpy.mockClear();

  userEvent.click(submitSkillsButton);

  expect(consoleSpy).toHaveBeenCalledTimes(4);
  userEvent.click(clearSkillsButton);

  userEvent.type(skillNameInput, 'skill 2');
  userEvent.selectOptions(efficiencySelector, '2');
  userEvent.click(addSkillButton);

  userEvent.type(skillNameInput, 'skill 1');
  userEvent.selectOptions(efficiencySelector, '1');
  userEvent.click(addSkillButton);

  consoleSpy.mockClear();
  userEvent.click(submitSkillsButton);

  expect(consoleSpy).toHaveBeenCalledTimes(2);
});
