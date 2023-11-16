import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.remixts.app',
  appName: 'capacitor-template-remix-ts',
  webDir: 'public/build',
  bundledWebRuntime: false,
  server: {
    url: "https://dkmt-vite.fly.dev/",
    cleartext: true
  }
};

export default config;