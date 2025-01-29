import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Galdutako_dokumentuaren_bila',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
    ScreenOrientation: {
      orientation: 'landscape',
    }
  }
};

export default config;
