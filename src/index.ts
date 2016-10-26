/// <reference path="../typings/index.d.ts" />


import appIndex from './app/index/index';

export const app: string = 'app';


angular
  .module(app, ['ui.router', appIndex]);
