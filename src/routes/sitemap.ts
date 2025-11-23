import { HTMLAttributeAnchorTarget } from 'react';
import { SxProps } from '@mui/material';
import paths, { rootPaths } from './paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  key?: string;
  selectionPrefix?: string;
  path?: string;
  target?: HTMLAttributeAnchorTarget;
  active?: boolean;
  icon?: string;
  iconSx?: SxProps;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  key?: string; // used for the locale
  subheader?: string;
  icon: string;
  target?: HTMLAttributeAnchorTarget;
  iconSx?: SxProps;
  items: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 'pages',
    icon: 'material-symbols:view-quilt-outline',
    items: [
      {
        name: 'Dashboard',
        path: rootPaths.root,
        pathName: 'dashboard',
        icon: 'material-symbols:query-stats-rounded',
        active: true,
      },
      {
        name: 'Users',
        path: paths.users,
        pathName: 'users',
        icon: 'material-symbols:account-box-outline',
        active: true,
      },
      {
        name: 'Account',
        key: 'account',
        path: paths.account,
        pathName: 'account',
        active: true,
        icon: 'material-symbols:admin-panel-settings-outline-rounded',
      },
      {
        name: 'Starter',
        path: paths.starter,
        pathName: 'starter',
        icon: 'material-symbols:play-circle-outline-rounded',
        active: true,
      },
      {
        name: 'Error 404',
        pathName: 'error',
        active: true,
        icon: 'material-symbols:warning-outline-rounded',
        path: paths[404],
      },
      {
        name: 'Login',
        icon: 'material-symbols:login',
        path: paths.login,
        pathName: 'login',
        active: true,
      },
      {
        name: 'Sign up',
        icon: 'material-symbols:person-add-outline',
        path: paths.signup,
        pathName: 'sign-up',
        active: true,
      },
      {
        name: 'Documentation',
        icon: 'material-symbols:description-outline-rounded',
        path: paths.documentation,
        pathName: 'documentation',
        active: true,
        target: '_blank',
      },
      {
        name: 'Multi level',
        pathName: 'multi-level',
        icon: 'material-symbols:layers-outline-rounded',
        active: true,
        items: [
          {
            name: 'Level two (1)',
            path: '#!',
            pathName: 'multi-level-2',
            active: true,
          },
          {
            name: 'Level two (2)',
            pathName: 'multi-level-3',
            active: true,
            items: [
              {
                name: 'Level three (1)',
                path: '#!',
                pathName: 'multi-level-item-3',
                active: true,
              },
              {
                name: 'Level three (2)',
                path: '#!',
                pathName: 'multi-level-item-4',
                active: true,
              },
            ],
          },
          {
            name: 'Level two (3)',
            pathName: 'multi-level-4',
            active: true,
            items: [
              {
                name: 'Level three (3)',
                path: '#!',
                pathName: 'multi-level-item-6',
                active: true,
              },
              {
                name: 'Level three (4)',
                pathName: 'multi-level-item-7',
                active: true,
                items: [
                  {
                    name: 'Level four (1)',
                    path: '#!',
                    pathName: 'multi-level-item-8',
                    active: true,
                  },
                  {
                    name: 'Level four (2)',
                    pathName: 'multi-level-item-9',
                    active: true,
                    items: [
                      {
                        name: 'Level five (1)',
                        path: '#!',
                        pathName: 'multi-level-item-10',
                        active: true,
                      },
                      {
                        name: 'Level five (2)',
                        path: '#!',
                        pathName: 'multi-level-item-11',
                        active: true,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default sitemap;
