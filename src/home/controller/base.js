'use strict';
import request from "request";
export default class extends think.controller.base {
  /**
   * some base method in here
   */
  async __before() {

  }
  async getConfig() {
  }
  // view层
  async displayView(name) {
    return this.display( name + '.html');
  }
}