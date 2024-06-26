import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LockResetIcon from '@mui/icons-material/LockReset';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import { MenuItem } from './MenuItem';
import Divider from '@mui/material/Divider';
import { t, Trans } from '@lingui/macro';
import { ConfirmationDialog } from '../../../shared/components/dialogs/ConfirmationDialog';
import { FC, useState } from 'react';
import { useLingui } from '@lingui/react';
import { useAuth } from '../../../shared/hooks/useAuth';
import { DrawerItems } from './models/DrawerItem';
type MenuLinksProps = {
  onMenuItemClick: (menuItemName: DrawerItems) => void;
};

export const MenuLinks: FC<MenuLinksProps> = ({ onMenuItemClick }) => {
  const { logOut } = useAuth();

  const { i18n } = useLingui();
  const [logoutConfirmOpen, setLogoutConfirmOpen] = useState(false);

  const onLogout = () => {
    setLogoutConfirmOpen(true);
    // logOut();
  };

  const closeModal = () => {
    setLogoutConfirmOpen(false);
  };
  const onItemClick = (name: DrawerItems) => {
    onMenuItemClick(name);
  };

  return (
    <>
      <section className="flex-1 flex flex-col items-start p-4 gap-8">
        <MenuItem onClick={() => onItemClick('profile')}>
          <AccountCircleIcon fontSize="medium" className="mr-8" />
          <Trans id="Drawer.Profile">Profile</Trans>
        </MenuItem>
        <MenuItem onClick={() => onItemClick('help')}>
          <HelpOutlineIcon fontSize="medium" className="mr-8" />
          <Trans id="Drawer.Help">Help</Trans>
        </MenuItem>
        <MenuItem onClick={() => onItemClick('settings')}>
          <SettingsIcon fontSize="medium" className="mr-8" />
          <Trans id="Drawer.Settings">Settings</Trans>
        </MenuItem>
        <div className="flex-1 flex flex-col justify-end w-full">
          <Divider></Divider>
          <MenuItem color="error" onClick={onLogout}>
            <LogoutIcon fontSize="medium" className="mr-8" />

            <Trans id="Drawer.Logout">Log out</Trans>
          </MenuItem>
        </div>
      </section>
      <ConfirmationDialog
        icon={<LogoutIcon color="error" />}
        text={i18n._(
          t({
            id: 'LogOut.ConfirmText',
            message: 'Are you sure you want to log out?',
          })
        )}
        confirmText={i18n._(
          t({ id: 'LogOut.ConfirmBtn.Label', message: 'SIGN OUT' })
        )}
        destructive={true}
        onCancel={closeModal}
        onConfirm={logOut}
        open={logoutConfirmOpen}
        onClose={closeModal}
      ></ConfirmationDialog>
    </>
  );
};
