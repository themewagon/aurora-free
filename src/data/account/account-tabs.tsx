import { AccountTab } from 'types/accounts';
import PersonalInfoTabPanel from 'components/sections/account/personal-info/PersonalInfoTabPanel';

export const accountTabs: AccountTab[] = [
  {
    id: 1,
    label: 'Personal Information',
    title: 'Personal Info',
    value: 'personal_information',
    icon: 'material-symbols:person-outline',
    panelIcon: 'material-symbols:person-outline',
    tabPanel: <PersonalInfoTabPanel />,
  },
  {
    id: 2,
    label: 'Work & Education',
    title: 'Work & Education',
    value: 'work_education',
    icon: 'material-symbols:school-outline',
    panelIcon: 'material-symbols:school-outline',
    tabPanel: null,
  },
  {
    id: 3,
    label: 'Privacy & Protection',
    title: 'Privacy & Protection',
    value: 'privacy_protection',
    icon: 'material-symbols:shield-outline',
    panelIcon: 'material-symbols:shield-outline',
    tabPanel: null,
  },
  {
    id: 4,
    label: 'Language & Region',
    title: 'Language & Region',
    value: 'language_region',
    icon: 'material-symbols:language',
    panelIcon: 'material-symbols:language',
    tabPanel: null,
  },
  {
    id: 5,
    label: 'Notification & Alerts',
    title: 'Notification & Alerts',
    value: 'notification_alerts',
    icon: 'material-symbols:notifications-outline-rounded',
    panelIcon: 'material-symbols:notifications-outline-rounded',
    tabPanel: null,
  },
];
