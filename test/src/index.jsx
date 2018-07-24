import './polyfill';
import { render, hot } from '@vzhdi/react-runtime';
import App from './app';

render(hot(module)(App), 'root');
