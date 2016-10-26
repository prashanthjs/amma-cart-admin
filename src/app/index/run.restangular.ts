import {API_BASE_URL} from "../constants/main";

/* @ngInject */
export default function restangularRun(Restangular, $location) {
  Restangular.setBaseUrl(API_BASE_URL);
  Restangular.setErrorInterceptor(function (resp) {
    if (resp.status === 404) {
      $location.path('/404');
    }
    return resp;
  });
}
