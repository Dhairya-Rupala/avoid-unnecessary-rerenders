import App from '../App';
import { within } from '@testing-library/dom';
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

  userEvent.clear(firstNameInput);
  userEvent.type(firstNameInput, 'Alex');

  userEvent.clear(lastNameInput);
  userEvent.type(lastNameInput, 'Grey');

  userEvent.clear(companyInput);
  userEvent.type(companyInput, 'Tech Corp');

  userEvent.clear(roleInput);
  userEvent.type(roleInput, 'QA');

  const resumePreview = getByTestId('resume-preview');

  within(resumePreview).getByText('Alex Grey');
  within(resumePreview).getByText('Company: Tech Corp');
  within(resumePreview).getByText('Role: QA');
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

test('5', () => {
  const { getByTestId } = render(<App />);

  const skillNameInput = getByTestId('skill-name-input');
  const efficiencySelector = getByTestId('efficiency-selector');
  const addSkillButton = getByTestId('add-skill-button');
  const submitSkillsButton = getByTestId('submit-skills-button');

  const form = getByTestId('form');

  userEvent.type(skillNameInput, 'C++');
  userEvent.selectOptions(efficiencySelector, '1');
  userEvent.click(addSkillButton);

  userEvent.type(skillNameInput, 'Python');
  userEvent.selectOptions(efficiencySelector, '7');
  userEvent.click(addSkillButton);

  expect(within(form).getByText('C++ (1)'));
  expect(within(form).getByText('Python (7)'));

  userEvent.click(submitSkillsButton);

  const resumePreview = getByTestId('resume-preview');
  expect(within(resumePreview).getByText('C++ (1)'));
  expect(within(resumePreview).getByText('Python (7)'));

  const firstSkill = within(resumePreview).getByTestId('skill-tag-0');
  const secondSkill = within(resumePreview).getByTestId('skill-tag-1');

  expect(within(firstSkill).getByText('Python (7)'));
  expect(within(secondSkill).getByText('C++ (1)'));
});

test('6', () => {
  const { getByTestId } = render(<App />);
  consoleSpy.mockClear();

  const skillNameInput = getByTestId('skill-name-input');
  userEvent.type(skillNameInput, 'x');

  expect(consoleSpy).toHaveBeenCalledTimes(1);

  const efficiencySelector = getByTestId('efficiency-selector');
  userEvent.selectOptions(efficiencySelector, '3');

  expect(consoleSpy).toHaveBeenCalledTimes(2);

  consoleSpy.mockClear();
  const addSkillButton = getByTestId('add-skill-button');
  userEvent.click(addSkillButton);

  expect(consoleSpy).toHaveBeenCalledTimes(2);

  consoleSpy.mockClear();
  const clearSkillsButton = getByTestId('clear-skills-button');
  userEvent.click(clearSkillsButton);

  expect(consoleSpy).toHaveBeenCalledTimes(1);
});

test('7', () => {
  const { getByTestId } = render(<App />);

  const skillNameInput = getByTestId('skill-name-input');
  const efficiencySelector = getByTestId('efficiency-selector');
  const addSkillButton = getByTestId('add-skill-button');
  const clearSkillsButton = getByTestId('clear-skills-button');
  const submitSkillsButton = getByTestId('submit-skills-button');

  userEvent.type(skillNameInput, 'Jest');
  userEvent.selectOptions(efficiencySelector, '1');
  userEvent.click(addSkillButton);

  userEvent.type(skillNameInput, 'Java');
  userEvent.selectOptions(efficiencySelector, '5');
  userEvent.click(addSkillButton);
  consoleSpy.mockClear();

  userEvent.click(submitSkillsButton);

  expect(consoleSpy).toHaveBeenCalledTimes(4);
  userEvent.click(clearSkillsButton);

  userEvent.type(skillNameInput, 'Java');
  userEvent.selectOptions(efficiencySelector, '5');
  userEvent.click(addSkillButton);

  userEvent.type(skillNameInput, 'Jest');
  userEvent.selectOptions(efficiencySelector, '1');
  userEvent.click(addSkillButton);

  consoleSpy.mockClear();
  userEvent.click(submitSkillsButton);

  expect(consoleSpy).toHaveBeenCalledTimes(2);
});
