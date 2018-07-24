import NProgress from 'nprogress';
import './nprogress.less';

function configDefault() {
  NProgress.configure({
    showSpinner: true,
    minimum: 0.15,
    parent: 'body',
    trickle: true,
    trickleSpeed: 300,
  });
}

const listening = new Set();
const defaultId = `nprogress-${Date.now()}`;
export default {
  start(id = defaultId) {
    if (listening.size === 0) {
      configDefault();
      NProgress.start();
    }
    listening.add(id);
  },
  done(id = defaultId) {
    listening.delete(id);
    if (listening.size === 0) {
      NProgress.done();
    }
  },
};
