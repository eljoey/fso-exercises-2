import {
  NewDiaryEntry,
  Weather,
  Visibility,
  NewPatientEntry,
  Gender,
} from './types';

////////////////////////
// Course walkthrough //
////////////////////////

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseComment = (comment: any): string => {
  if (!comment || !isString(comment)) {
    throw new Error('Incorrect or missing comment: ' + comment);
  }
  return comment;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isWeather = (param: any): param is Weather => {
  return Object.values(Weather).includes(param);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseWeather = (weather: any): Weather => {
  if (!weather || !isWeather(weather)) {
    throw new Error('Incorrect or missing weather: ' + weather);
  }
  return weather;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseDate = (date: any): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error('Incorrect or missing date: ' + date);
  }

  return date;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isVisibility = (param: any): param is Visibility => {
  return Object.values(Visibility).includes(param);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseVisibility = (visibility: any): Visibility => {
  if (!visibility || !isVisibility(visibility)) {
    throw new Error('Incorrect or missing visibility: ' + visibility);
  }
  return visibility;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  return {
    date: parseDate(object.date),
    comment: parseComment(object.comment),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
  };
};

///////////////
// Exercises //
///////////////

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseName = (name: any): string => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing name: ' + name);
  }
  return name;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseDateOfBirth = (dateOfBirth: any): string => {
  if (!dateOfBirth || !isString(dateOfBirth) || !isDate(dateOfBirth)) {
    throw new Error('Incorrect or missing dateOfBirth: ' + dateOfBirth);
  }

  return dateOfBirth;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseSSN = (ssn: any): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error('Incorrect or missing ssn: ' + ssn);
  }
  return ssn;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error('Incorrect or missing gender: ' + gender);
  }
  return gender;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseOccupation = (occupation: any): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error('Incorrect or missing occupation: ' + occupation);
  }

  return occupation;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toNewPatientEntry = (object: any): NewPatientEntry => {
  return {
    name: parseName(object.name),
    dateOfBirth: parseDateOfBirth(object.dateOfBirth),
    ssn: parseSSN(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseOccupation(object.occupation),
  };
};

export default {
  toNewDiaryEntry,
  toNewPatientEntry,
};
