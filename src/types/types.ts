import {ImageSourcePropType} from 'react-native';

export interface CustomCardProps {
  data: Data;
}

export interface Data {
  id: number;
  title: string;
  description: string;
  done: boolean;
  img?: ImageSourcePropType;
}

export interface NewData {
  title: string;
  description: string;
}
export interface AddTaskProps {
  addNewData: (data: NewData) => void;
}
