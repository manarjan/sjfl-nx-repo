import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.sjfl.judians',
  appName: 'St. Judes For Life - Judians',
  webDir: '../../dist/apps/sjfl-judians',
  bundledWebRuntime: false,
  server:
    process.env.NODE_ENV === 'production'
      ? undefined
      : {
          url: 'http://localhost:4200/',
          cleartext: true,
        },
  ios: {
    allowsLinkPreview: false,
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    SplashScreen: {
      launchShowDuration: 100,
      launchAutoHide: true,
      launchFadeOutDuration: 100,
      backgroundColor: '#ffffffff',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
      spinnerColor: '#999999',
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: 'launch_screen',
      useDialog: true,
    },
  },
};

export default config;
