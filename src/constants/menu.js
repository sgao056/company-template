import { adminRoot } from './defaultValues';
// import { UserRole } from "helpers/authHelper"
const menuData = [
  {
    icon: 'simple-icon-paper-plane',
    label: 'Dashboard',
    to: `${adminRoot}/gogo/dashboard`,
  },
  {
    icon: 'simple-icon-paper-plane',
    label: 'Inventory',
    to: `${adminRoot}/gogo/inventory`,
  },
  {
    icon: 'simple-icon-paper-plane',
    label: 'Holders',
    to: `${adminRoot}/gogo/holders`,
  },
  {
    icon: 'simple-icon-paper-plane',
    label: 'Rewards',
    to: `${adminRoot}/gogo/rewards`,
  },
  {
    icon: 'simple-icon-paper-plane',
    label: 'Portal',
    to: `${adminRoot}/gogo/portal`,
  },
  {
    icon: 'simple-icon-paper-plane',
    label: 'Transactions',
    to: `${adminRoot}/gogo/transactions`,
  },
  {
    icon: 'simple-icon-paper-plane',
    label: 'Meta data',
    to: `${adminRoot}/gogo/meta-data`,
  },
];

const data = [
  {
    id: 'gogo',
    icon: 'iconsminds-air-balloon-1',
    label: 'F',
    to: `${adminRoot}/gogo`,
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: menuData
  },
  {
    id: 'secondmenu',
    icon: 'iconsminds-three-arrow-fork',
    label: 'R',
    to: `${adminRoot}/second-menu`,
    subs: menuData
  },
  {
    id: 'blankpage',
    icon: 'simple-icon-plus',
    label: 'Create',
    to: `${adminRoot}/new-community`,
  }
];
export default data;
