import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import MenuIcon from '@mui/icons-material/Menu';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CloseIcon from '@mui/icons-material/Close';
import {
  FC,
  SyntheticEvent,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  Outlet,
  useLocation,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import { Scaffold } from '../../shared/components/containers/Scaffold';
import { FullScreenSpinner } from '../../shared/components/progress/FullScreenSpinner';
import { DrawerMenu } from './DrawerMenu/DrawerMenu';
import {
  AppBar,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Modal,
  Slide,
  Slider,
  Toolbar,
  styled,
} from '@mui/material';
import { Trans } from '@lingui/react';
import { ActiveMenuItem } from './DrawerMenu';
import { TransitionProps } from '@mui/material/transitions';
import { DrawerItems } from './DrawerMenu/models/DrawerItem';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const AppLayout = () => {
  const location = useLocation();

  const [route, setRoute] = useState<string>('');
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const navigation = useNavigation();
  const showSpinner = navigation.state === 'submitting';
  const [activeMenuItem, setActiveMenuItem] = useState<DrawerItems>(undefined);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    setRoute(location.pathname.split('/')[1]);
  }, [location]);

  const onRouteChange = (_event: SyntheticEvent, route: string) => {
    if (route === 'menu') {
      setDrawerOpen(true);
      return;
    }
    setRoute(route);
    navigate(route);
  };

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  const showPage = (menuItemName: DrawerItems) => {
    setActiveMenuItem(menuItemName);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setActiveMenuItem(undefined);
    setIsDialogOpen(false);
  };

  const footer = (
    <Paper component="footer" elevation={3}>
      <BottomNavigation showLabels value={route} onChange={onRouteChange}>
        <BottomNavigationAction label="Home" value="" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Aid"
          value="aid"
          icon={<MedicalServicesIcon />}
        />
        <BottomNavigationAction
          label="Counselling"
          value="counselling"
          icon={<CalendarMonthIcon />}
        />
        <BottomNavigationAction label="Menu" value="menu" icon={<MenuIcon />} />
      </BottomNavigation>
      <Dialog
        sx={{
          zIndex: 1500,
        }}
        TransitionComponent={Transition}
        open={isDialogOpen}
        onClose={handleCloseDialog}
        fullScreen
      >
        <ActiveMenuItem
          activeMenuItem={activeMenuItem}
          onClose={handleCloseDialog}
        ></ActiveMenuItem>
      </Dialog>
    </Paper>
  );

  return (
    <Scaffold footer={footer}>
      <>
        {showSpinner ? <FullScreenSpinner /> : <Outlet />}
        <SwipeableDrawer
          anchor="right"
          open={drawerOpen}
          onClose={closeDrawer}
          onOpen={openDrawer}
        >
          <DrawerMenu onDismiss={closeDrawer} onMenuItemClick={showPage} />
        </SwipeableDrawer>
      </>
    </Scaffold>
  );
};
