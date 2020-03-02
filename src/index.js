import './sass/main.sass';
import VDaterange from './components/VDaterange';

const install = Vue => {
  Vue.component('v-daterange', VDaterange);
};

export default install;
