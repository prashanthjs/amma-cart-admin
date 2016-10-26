import chartJsConfig from './config/chartjs';
import restangularConfig from './config/restangular';
import routeConfig from './config/route';
import triangularLayoutConfig from './config/triangular.layout';
import triangularSettingConfig from './config/triangular.settings';
import triangularThemeConfig from './config/triangular.themes';

import FooterController from './layouts/footer/footer.controller';
import LeftSidenavController from './layouts/leftsidenav/leftsidenav.controller';
import LoaderController from './layouts/loader/loader.controller';
import RightSidenavController from './layouts/rightsidenav/rightsidenav.controller';
import ToolbarController from './layouts/toolbar/toolbar.controller';
import ErrorPageController from './error-page.controller';

import restangularRun from './run.restangular';
import googleChartApiConfig from './value.googlechart';

const appIndex = 'app.index';

angular
  .module(appIndex, ['triangular',
    'ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngMaterial',
    'googlechart', 'chart.js', 'linkify', 'ui.calendar', 'angularMoment', 'textAngular', 'uiGmapgoogle-maps', 'hljs', 'md.data.table',
    //  angularDragula(angular),
    'ngFileUpload',
    'restangular',
    'kendo.directives',
    'ngPassword'])
  .config(chartJsConfig)
  .config(restangularConfig)
  .config(routeConfig)
  .config(triangularLayoutConfig)
  .config(triangularThemeConfig)
  .config(triangularSettingConfig)
  .controller('AppFooterController', FooterController)
  .controller('LeftSidenavController', LeftSidenavController)
  .controller('LoaderController', LoaderController)
  .controller('RightSidenavController', RightSidenavController)
  .controller('ToolbarController', ToolbarController)
  .controller('ErrorPageController', ErrorPageController)
  .run(restangularRun)
  .value(googleChartApiConfig);

export default appIndex;
