import { observable, computed, transaction } from 'mobx'


export default class DosingRecommendation {
  @observable dosingRecommendation;
  @observable isOpen
  @observable plotData
  constructor(initialRec) {
    this.dosingRecommendation = []
    this.isOpen = false
    this.plotData = {}
  }

}
