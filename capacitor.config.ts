import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.remixts.app',
  appName: 'capacitor-template-remix-ts',
  webDir: 'public/build',
  bundledWebRuntime: false,
  server: {
    url: "https://dkmt-vite-p4f3mjxfl-golfredopf.vercel.app/",
    cleartext: true
  }
};

export default config;