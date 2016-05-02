import { observable, computed, transaction } from 'mobx'


export default class DosingRecommendation {
  @observable dosingRecommendation;

  constructor(initialRec) {
    this.dosingRecommendation = [] 
    console.log(this.dosingRecommendation)
  }

}
