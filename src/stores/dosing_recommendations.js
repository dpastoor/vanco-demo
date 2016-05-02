import { observable, computed, transaction } from 'mobx'


export default class DosingRecommendation {
  @observable dosingRecommendation;
  @observable isOpen
  constructor(initialRec) {
    this.dosingRecommendation = []
    this.isOpen = false
  }

}
