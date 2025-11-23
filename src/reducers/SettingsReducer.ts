import { Config, FontFamily, initialConfig } from 'config';
import { mainDrawerWidth } from 'lib/constants';
import { setItemToStore } from 'lib/utils';

//Action types
export const SET_CONFIG = 'SET_CONFIG';
export const REFRESH = 'REFRESH';
export const RESET = 'RESET';
export const COLLAPSE_NAVBAR = 'COLLAPSE_NAVBAR';
export const EXPAND_NAVBAR = 'EXPAND_NAVBAR';
export const SET_FONT_FAMILY = 'SET_FONT_FAMILY';

//Action ts type
export type ACTIONTYPE =
  | { type: typeof SET_CONFIG; payload: Partial<Config> }
  | { type: typeof REFRESH }
  | { type: typeof COLLAPSE_NAVBAR }
  | { type: typeof EXPAND_NAVBAR }
  | { type: typeof RESET }
  | { type: typeof SET_FONT_FAMILY; payload: FontFamily };

export const settingsReducer = (state: Config, action: ACTIONTYPE) => {
  let updatedState: Partial<Config> = {};

  switch (action.type) {
    case SET_CONFIG: {
      updatedState = action.payload;
      break;
    }
    case COLLAPSE_NAVBAR: {
      updatedState = {
        sidenavCollapsed: true,
        drawerWidth: mainDrawerWidth.collapsed,
      };
      break;
    }
    case EXPAND_NAVBAR: {
      updatedState = {
        sidenavCollapsed: false,
        drawerWidth: mainDrawerWidth.full,
      };
      break;
    }
    case RESET:
      updatedState = {
        ...initialConfig,
      };
      break;
    case SET_FONT_FAMILY: {
      updatedState = {
        fontFamily: action.payload,
      };
      break;
    }
    case REFRESH:
      return {
        ...state,
      };
    default:
      return state;
  }
  Object.keys(updatedState).forEach((key) => {
    if (['sidenavCollapsed', 'fontFamily'].includes(key)) {
      setItemToStore(key, String(updatedState[key as keyof Config]));
    }
  });

  return { ...state, ...updatedState };
};
