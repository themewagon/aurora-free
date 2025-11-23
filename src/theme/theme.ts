import type {} from '@mui/lab/themeAugmentation';
import type {} from '@mui/material/themeCssVarsAugmentation';
import type {} from '@mui/x-data-grid/themeAugmentation';
import AppBar from './components/AppBar';
import Autocomplete from './components/Autocomplete';
import { Avatar, AvatarGroup } from './components/Avatar';
import Backdrop from './components/Backdrop';
import Breadcrumbs from './components/Breadcrumbs';
import Button, { ButtonBase } from './components/Button';
import Checkbox from './components/Checkbox';
import Chip from './components/Chip';
import CssBaseline from './components/CssBaseline';
import DataGrid from './components/DataGrid';
import Dialog from './components/Dialog';
import Drawer from './components/Drawer';
import Link from './components/Link';
import List, { ListItemButton, ListItemIcon, ListItemText } from './components/List';
import { MenuItem } from './components/Menu';
import Pagination, { PaginationItem } from './components/Pagination';
import Paper from './components/Paper';
import Popover from './components/Popover';
import Popper from './components/Popper';
import { CircularProgress, LinearProgress } from './components/Progress';
import Radio from './components/Radio';
import Select from './components/Select';
import { SnackbarContent } from './components/Snackbar';
import Stack from './components/Stack';
import Switch from './components/Switch';
import { Tab, Tabs } from './components/Tab';
import TablePagination from './components/TablePagination';
import ToggleButton, { ToggleButtonGroup } from './components/ToggleButton';
import Toolbar from './components/Toolbar';
import Tooltip from './components/Tooltip';
import Typography from './components/Typography';
import FilledInput from './components/text-fields/FilledInput';
import FormControl from './components/text-fields/FormControl';
import FormControlLabel from './components/text-fields/FormControlLabel';
import FormHelperText from './components/text-fields/FormHelperText';
import Input, { InputBase } from './components/text-fields/Input';
import InputAdornment from './components/text-fields/InputAdornment';
import InputLabel from './components/text-fields/InputLabel';
import OutlinedInput from './components/text-fields/OutlinedInput';
import TextField from './components/text-fields/TextField';
import { paletteOptions } from './palette';
import shadows from './shadows';
import sxConfig from './sxConfig';

export const themeOverrides = {
  cssVariables: { colorSchemeSelector: 'data-aurora-color-scheme', cssVarPrefix: 'aurora' },
  shadows: ['none', ...shadows],
  colorSchemes: {
    light: {
      palette: paletteOptions,
      shadows: ['none', ...shadows],
    },
    dark: false,
  },
  unstable_sxConfig: sxConfig,
  components: {
    MuiAppBar: AppBar,
    MuiPaper: Paper,
    MuiButton: Button,
    MuiToggleButton: ToggleButton,
    MuiToggleButtonGroup: ToggleButtonGroup,
    MuiButtonBase: ButtonBase,
    // input fields
    MuiTextField: TextField,
    MuiFilledInput: FilledInput,
    MuiOutlinedInput: OutlinedInput,
    MuiInputLabel: InputLabel,
    MuiInputAdornment: InputAdornment,
    MuiFormHelperText: FormHelperText,
    MuiInput: Input,
    MuiInputBase: InputBase,
    MuiFormControl: FormControl,
    MuiFormControlLabel: FormControlLabel,
    MuiAutocomplete: Autocomplete,
    // ----------
    MuiBreadcrumbs: Breadcrumbs,
    MuiSelect: Select,
    MuiDialog: Dialog,
    MuiStack: Stack,
    MuiCheckbox: Checkbox,
    MuiRadio: Radio,
    MuiPagination: Pagination,
    MuiPaginationItem: PaginationItem,
    MuiTablePagination: TablePagination,
    MuiChip: Chip,
    MuiSwitch: Switch,
    MuiList: List,
    MuiListItemButton: ListItemButton,
    MuiListItemIcon: ListItemIcon,
    MuiListItemText: ListItemText,
    MuiMenuItem: MenuItem,
    MuiToolbar: Toolbar,
    MuiTooltip: Tooltip,
    MuiTabs: Tabs,
    MuiTab: Tab,
    MuiTypography: Typography,
    MuiCircularProgress: CircularProgress,
    MuiLinearProgress: LinearProgress,
    MuiAvatar: Avatar,
    MuiAvatarGroup: AvatarGroup,
    MuiDataGrid: DataGrid,
    MuiCssBaseline: CssBaseline,
    MuiLink: Link,
    MuiBackdrop: Backdrop,
    MuiPopover: Popover,
    MuiPopper: Popper,
    MuiDrawer: Drawer,
    MuiSnackbarContent: SnackbarContent,
  },
};
