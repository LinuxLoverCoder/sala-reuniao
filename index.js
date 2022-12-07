/**
 * @format
 */

import { AppRegistry, Text } from 'react-native';
import Navigator from './src/Navigator';
import { name as appName } from './app.json';
import App from './src/screens/App';



AppRegistry.registerComponent(appName, () => Navigator)



