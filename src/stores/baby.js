import { observable, computed, transaction } from 'mobx'


export class Baby {
  @observable weightRecords;
  @observable serumCreatinineRecords;
  @observable concentrationRecords;
  @observable dosingRecords;
  @observable dosingRecomendations;
  constructor(name, timeOfBirth, weight, serumCreatinine) {
    this.name = name;
    this.timeOfBirth = timeOfBirth;
    this.weightRecords = [];
    this.serumCreatinineRecords = [];
    this.concentrationRecords = [];
    this.dosingRecords = [];
    this.dosingRecommendations = [];
    this.addWeight(timeOfBirth, weight);
    this.addSerumCreatinine( timeOfBirth, serumCreatinine);
  }
  addWeight(time, weight){
    this.weightRecords.push(new WeightRecord(time, weight))
  }
  addSerumCreatinine(time, serumCreatinine) {
    this.serumCreatinineRecords.push(new SerumCreatinineRecord(time, weight))
  }
  addConcentrationRecord(time, concentration) {
    this.concentrationRecords.push(new ConcentrationRecord(time, concentration))
  }
  addDosingRecord(time, dose) {
    this.dosingRecords.push(new DosingRecord(time, dose))
  }
  addDosingRecommendation(time, dose) {
    this.dosingRecommendations.push(new DosingRecommendation(time, dose))
  }
}

export class WeightRecord {
  constructor(time, weight) {
    this.time = time;
    this.weight = weight;
  }
}
export class SerumCreatinineRecord {
  constructor(time, serumCreatinine) {
    this.time = time;
    this.serumCreatinine = serumCreatinine;
  }
}

export class ConcentrationRecord {
  constructor(time, concentration) {
    this.time = time;
    this.concentration = concentration;
  }
}
export class DosingRecord {
  constructor(time, dosing) {
    this.time = time;
    this.dosing = dosing;
  }
}

export class DosingRecommendation {
  constructor(time, dosing) {
    this.time = time;
    this.dosing = dosing;
  }
}
