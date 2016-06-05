import { observable, computed, transaction } from 'mobx'
import uuid from 'uuid'
export class Baby {
  @observable weightRecords;
  @observable serumCreatinineRecords;
  @observable concentrationRecords;
  @observable dosingRecords;
  @observable dosingRecomendations;
  @observable attendingDoctor;
  @observable treatmentInProgress;
  constructor(name, timeOfBirth, weight, serumCreatinine, attendingDoctor, treatmentInProgress) {
    this.name = name;
    this.timeOfBirth = timeOfBirth;
    this.weightRecords = [];
    this.serumCreatinineRecords = [];
    this.concentrationRecords = [];
    this.dosingRecords = [];
    this.dosingRecommendations = [];
    this.addWeight(timeOfBirth, weight);
    this.addSerumCreatinine(timeOfBirth, serumCreatinine);
    this.attendingDoctor = attendingDoctor;
    this.uuid = uuid.v4();
    this.treatmentInProgress = treatmentInProgress;
  }
  addWeight(time, weight){
    this.weightRecords.push(new WeightRecord(time, weight))
  }
  addSerumCreatinine(time, serumCreatinine) {
    this.serumCreatinineRecords.push(new SerumCreatinineRecord(time, serumCreatinine))
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
  onTreatment(inProgress) {
    this.treatmentInProgress = inProgress;
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
  constructor(time, amt) {
    this.time = time;
    this.amt = amt;
  }
}

export class DosingRecommendation {
  constructor(time, amt, ii) {
    this.time = time;
    this.amt = amt;
    this.ii = ii;
  }
}


export class BabyCollection {
  @observable babies;
  constructor() {
    this.babies = [];
  }
  add(baby) {
    this.babies.push(baby)
  }
}
