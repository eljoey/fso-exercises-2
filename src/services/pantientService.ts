import patients from '../../data/patients';
import { NonSensitivePatientEntry } from '../types';

const getNonSensitivePatients = (): Array<NonSensitivePatientEntry> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export default {
  getNonSensitivePatients,
};
