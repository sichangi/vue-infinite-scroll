import InfiniteScroll from './directive';

const win = typeof window !== 'undefined' ? window : {};//eslint-disable-line

const install = function (Vue) {
  Vue.directive('InfiniteScroll', InfiniteScroll);
};

if (win.Vue) {
  window.infiniteScroll = InfiniteScroll;
  Vue.use(install); // eslint-disable-line
}

InfiniteScroll.install = install;
export default InfiniteScroll;
