import qs from 'qs';

export interface ParsedQuery {
  [key: string]: undefined | string | string[] | ParsedQuery | ParsedQuery[];
}

export class Query {
  public static parse<T extends ParsedQuery>(text: string): T {
    return qs.parse(text) as T;
  }

  public static stringify(query: ParsedQuery): string {
    return qs.stringify(query);
  }
}
