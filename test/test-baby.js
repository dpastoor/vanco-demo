/**
 *
 * Created by devin on 6/1/16.
 */
import test from 'ava';
import {Baby} from '../src/stores/baby'
test(t => {
  const baby1 = new Baby("Dan", "2016", 2.5, 0.9, "Michel");
  t.true(baby1.attendingDoctor === "Michel")
});

test(t => {
  const baby2 = new Baby("Dan", "2016", 2.5, 0.9, "Michel");
  baby2.addSerumCreatinine("2016", 0.9)
  t.true(baby2.serumCreatinineRecords[0].serumCreatinine === 0.9)
});
