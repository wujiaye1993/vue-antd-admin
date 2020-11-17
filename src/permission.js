import router from './router';
import { getCache } from '@/utils/session';
import getPageTitle from '@/utils/getPageTitle';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import { message } from 'ant-design-vue';
import store from './store';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

router.beforeEach((to, from, next) => {
  NProgress.start();
  document.title = getPageTitle(to.meta.title);
  const isLogin = getCache('TOKEN');
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  if (to.path == '/login') {
    next();
    NProgress.done();
  } else {
    if (!isLogin) {
      next('/login');
    } else {
      const userInfo = store.state.user.accountInfo;
      if (userInfo) {
        next();
        NProgress.done();
      } else {
        store
          .dispatch('user/getInfo')
          .then(data => {
            const { role } = data;
            next();
            NProgress.done();
          })
          .catch(err => {
            message.err('获取用户信息失败');
            next('/login');
            NProgress.done();
          });
      }
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
