import qs, { ParsedQs } from 'qs';

export class Query {
  public static parse(text: string): ParsedQs {
    return qs.parse(text);
  }

  public static stringify(query: ParsedQs): string {
    return qs.stringify(query);
  }
}
