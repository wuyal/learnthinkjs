'use strict';

import Base from './base.js';


export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async  indexAction(){

    let model1 = this.model('user');
    let data = await model1.select();
    this.assign("userList",data)  ;
    this.assign("title","官网ewe   ");
    return this.display();
  }
}