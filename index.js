// React Native.
import { AppRegistry } from 'react-native';

// App name.
import { name as appName } from './app.json';

// App main component.
import AppMain from './src/index';

// Init the app.
AppRegistry.registerComponent(appName, () => AppMain);
