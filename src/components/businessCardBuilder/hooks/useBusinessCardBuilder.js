import { useState } from 'react';

const DEFAULT_FIRST_NAME = 'Lorem';
const DEFAULT_LAST_NAME = 'Ipsum';
const DEFAULT_COMPANY = 'IT Corp';
const DEFAULT_ROLE = 'Engineer';

export const useBusinessCardBuilder = () => {
  const [headerColorIndex, setHeaderColorIndex] = useState(0);

  const [firstName, setFirstName] = useState(DEFAULT_FIRST_NAME);
  const [lastName, setLastName] = useState(DEFAULT_LAST_NAME);
  const [company, setCompany] = useState(DEFAULT_COMPANY);
  const [role, setRole] = useState(DEFAULT_ROLE);
  const [colorConfig, setColorConfig] = useState({
    bgColor: 'white',
    fontColor: 'black',
  });

  const COLORS = ['black', 'red', 'grey', 'dodgerBlue'];

  const onAction = (action) => {
    switch (action.type) {
      case 'CHANGE_FIRST_NAME': {
        setFirstName(action.payload.firstName);
        break;
      }
      case 'CHANGE_LAST_NAME': {
        setLastName(action.payload.lastName);
        break;
      }
      case 'CHANGE_ROLE': {
        setRole(action.payload.role);
        break;
      }
      case 'CHANGE_COMPANY': {
        setCompany(action.payload.company);
        break;
      }
      case 'CHANGE_HEADER_COLOR': {
        setHeaderColorIndex((headerColorIndex + 1) % COLORS.length);
        break;
      }
      case 'CHANGE_COLOR_CONFIG': {
        setColorConfig(action.payload.colorConfig);
        break;
      }
    }
  };

  return {
    formData: { firstName, lastName, company, role, colorConfig },
    headerColor: COLORS[headerColorIndex],
    onAction,
  };
};
