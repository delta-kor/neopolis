import qs from 'qs';

export interface RequestQuery {
  [key: string]: undefined | string | string[] | number | boolean | RequestQuery | RequestQuery[];
}

export interface ResponseQuery {
  [key: string]: undefined | string | ResponseQuery | ResponseQuery[];
}

export class Query {
  public static parse<T extends RequestQuery>(text: string): T {
    return qs.parse(text) as T;
  }

  public static stringify(query: RequestQuery): string {
    return qs.stringify(query);
  }
}
