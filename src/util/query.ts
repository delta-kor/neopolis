import qs from 'qs';

export interface RequestQuery {
  [key: string]: undefined | RequestQueryData | RequestQueryData[];
}

export interface ResponseQuery {
  [key: string]: undefined | ResponseQueryData | ResponseQueryData[];
}

type RequestQueryData = RequestQuery | string | number | boolean;
type ResponseQueryData = ResponseQuery | string;

export class Query {
  public static parse<T extends RequestQuery>(text: string): T {
    return qs.parse(text) as T;
  }

  public static stringify(query: RequestQuery): string {
    return qs.stringify(query);
  }
}
