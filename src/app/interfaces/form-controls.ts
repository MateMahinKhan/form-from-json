export interface ValueCoding {
  system: string;
  code: string;
  display: string;
}

export interface Option {
  valueCoding: ValueCoding;
}

export interface Item {
  linkId: string;
  text: string;
  type: string;
  option?: Option[];
}

export interface Questionnaire {
  resourceType: string;
  id: string;
  url: string;
  status: string;
  subjectType: string[];
  date: string;
  item: Item[];
}
