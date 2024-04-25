import { createRouter, createWebHashHistory, type RouteLocationNormalized } from 'vue-router';
import routes from './routes';
import setPageTitle from '@/utils/setPageTitle';
import { useCachedViewStoreHook } from '@/store/modules/cachedView';


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // 页面 title
  setPageTitle(to.meta.title);
  useCachedViewStoreHook().addCachedView(to);
  next();
});

router.afterEach(() => {});

export default router;
