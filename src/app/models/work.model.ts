export class Work {
  id: number;
  description: string;
  url: string;
  urlBig: string;
  title: string;
  subtitle: string;
  period: string;
  technologies: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
