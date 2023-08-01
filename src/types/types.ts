import {ImageSourcePropType} from 'react-native';

export interface CustomCardProps {
  data: Data;
  navigation: any;
}

export interface Data {
  id: number;
  title: string;
  description: string;
  done: boolean;
  img?: ImageSourcePropType;
  date?: Date;
}

export interface NewData {
  title: string;
  description: string;
  id?: number;
}
export interface FormProps {
  isEditing?: boolean;
  navigation?: any;
  selectedData?: Data;
}
