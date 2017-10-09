export class Article {
  id: number;
  title: string;
  subTitle: string;
  datePublish: string;
  description: string;
  descriptionSmall: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
