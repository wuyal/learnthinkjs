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
    return this.display("index.html");
  }
   /**
    * URL 地址  ，模板地址**/
   // url=home/index/about   template= view/home/index_to.html
  async  aboutAction(){
    let model1 = this.model('user');
    let data = await model1.select();
    this.assign("userList",data)  ;
    this.assign("title","2222");
    return this.display("to.html");
  }

 
}