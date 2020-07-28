import patients from '../../data/patients';
import {
  NonSensitivePatientEntry,
  PatientEntry,
  NewPatientEntry,
} from '../types';
import { v4 as uuidv4 } from 'uuid';

const getNonSensitivePatients = (): Array<NonSensitivePatientEntry> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatientEntry): PatientEntry => {
  const newPatient = {
    id: uuidv4(),
    ...entry,
  };

  patients.push(newPatient);
  return newPatient;
};

export default {
  getNonSensitivePatients,
  addPatient,
};
