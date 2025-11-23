import { JSX } from 'react';

export interface AccountTab {
  id?: number;
  label: string;
  title: string;
  value: string;
  icon: string;
  panelIcon: string;
  tabPanel: JSX.Element | null;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  userName: string;
  country: string;
  state: string;
  city: string;
  street: string;
  zip: string;
  phoneNumber: string;
  primaryEmail: string;
  secondaryEmail: string;
}
