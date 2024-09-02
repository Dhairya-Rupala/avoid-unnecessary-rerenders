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

  const skillNameInput1 = getByTestId('skill-name-input-0');
  userEvent.type(skillNameInput1, 'C++');

  const efficiencySelector1 = getByTestId('efficiency-selector-0');
  userEvent.selectOptions(efficiencySelector1, '6');

  const resumePreview = getByTestId('resume-preview');

  within(resumePreview).getByText('Alex Grey');
  within(resumePreview).getByText('Company: Tech Corp');
  within(resumePreview).getByText('Role: QA');
  within(resumePreview).getByText('C++');
});

test('2', () => {
  consoleSpy.mockClear();
  const { getByTestId } = render(<App />);

  consoleSpy.mockClear();
  const firstNameInput = getByTestId('first-name');
  userEvent.type(firstNameInput, 'f');
  expect(consoleSpy).toHaveBeenCalledTimes(4);

  consoleSpy.mockClear();
  const lastNameInput = getByTestId('last-name');
  userEvent.type(lastNameInput, 'l');
  expect(consoleSpy).toHaveBeenCalledTimes(4);

  consoleSpy.mockClear();
  const companyInput = getByTestId('company');
  userEvent.type(companyInput, 'c');
  expect(consoleSpy).toHaveBeenCalledTimes(4);

  consoleSpy.mockClear();
  const roleInput = getByTestId('role');
  userEvent.type(roleInput, 'r');
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

test('5', () => {
  const { getByTestId } = render(<App />);

  const skillNameInput1 = getByTestId('skill-name-input-0');
  userEvent.type(skillNameInput1, 'C++');

  const efficiencySelector1 = getByTestId('efficiency-selector-0');
  userEvent.selectOptions(efficiencySelector1, '1');

  const addSkillButton = getByTestId('add-skill-button');
  userEvent.click(addSkillButton);

  const skillNameInput2 = getByTestId('skill-name-input-1');
  userEvent.type(skillNameInput2, 'Python');

  const efficiencySelector2 = getByTestId('efficiency-selector-1');
  userEvent.selectOptions(efficiencySelector2, '10');

  const resumePreview = getByTestId('resume-preview');
  const firstSkill = within(resumePreview).getByTestId('skill-tag-0');
  const secondSkill = within(resumePreview).getByTestId('skill-tag-1');

  expect(within(firstSkill).getByText('C++'));
  expect(within(secondSkill).getByText('Python'));
});

test('6', () => {
  const { getByTestId } = render(<App />);
  consoleSpy.mockClear();

  const skillNameInput1 = getByTestId('skill-name-input-0');
  userEvent.type(skillNameInput1, 'x');

  expect(consoleSpy).toHaveBeenCalledTimes(5);
  consoleSpy.mockClear();

  const efficiencySelector1 = getByTestId('efficiency-selector-0');
  userEvent.selectOptions(efficiencySelector1, '3');

  expect(consoleSpy).toHaveBeenCalledTimes(3);
  consoleSpy.mockClear();

  userEvent.selectOptions(efficiencySelector1, '5');
  expect(consoleSpy).toHaveBeenCalledTimes(3);
  consoleSpy.mockClear();

  const addSkillButton = getByTestId('add-skill-button');
  userEvent.click(addSkillButton);

  expect(consoleSpy).toHaveBeenCalledTimes(2);
});
