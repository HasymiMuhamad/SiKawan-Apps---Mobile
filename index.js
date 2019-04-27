/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Navigasi from './src/components/Navigasi/Navigasi'
import Presensi from './src/components/Presensi/Presensi'
import Swiper from './src/components/Swiper/Swiper'
import Keluhan from './src/components/Keluhan/Keluhan'
import Login from './src/components/Login/Login.js';
import Home from './src/components/Home/Home.js';
import Landing from './src/components/Keluhan/Landing.js'
import Show from './src/components/Keluhan/Show.js';
import Test from './src/components/Home/Test.js'
import Router from './src/Navigasi/Router.js'
import Dashboard from './src/components/Home/Dashboard.js';


AppRegistry.registerComponent(appName, () => Router);
