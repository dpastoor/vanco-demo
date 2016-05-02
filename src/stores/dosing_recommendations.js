import { observable, computed, transaction } from 'mobx'


export default class DosingRecommendation {
  @observable dosingRecommendation;

  constructor(initialRec) {
    this.dosingRecommendation = {test: "answer"}
    console.log(this.dosingRecommendation)
  }



  giveRecommendation(data) {
    this.dosingRecommendation = data
    return data
  }


}
