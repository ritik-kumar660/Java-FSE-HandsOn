export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: 'passed' | 'failed' | 'pending';
  enrolled?: boolean;
}

export interface Student {
  id: number;
  name: string;
  email: string;
}
