import { useState } from 'react';

export const useBusinessCardBuilder = () => {
  const [headerColorIndex, setHeaderColorIndex] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');

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
    }
  };

  return {
    userInfo: { firstName, lastName, company, role },
    headerColor: COLORS[headerColorIndex],
    onAction,
  };
};
