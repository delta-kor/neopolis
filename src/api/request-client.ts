import axios from 'axios';
import { ParsedQuery, Query, Xml } from '../util';

export class RequestClient {
  constructor() {}

  public async shoot(url: string, query: ParsedQuery): Promise<HTMLElement> {
    const payload = Query.stringify(query);
    const headers = {
      Host: 'cf-city-int.socialquantum.com',
      Accept: '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const response = await axios({
      method: 'POST',
      url,
      data: payload,
      headers,
      validateStatus: () => true,
    });

    if (response.status !== 200)
      throw new Error(`Request failed with status code ${response.status} ${response.statusText}`);

    const data = Xml.parse(response.data);
    const country = data.querySelector('country') as HTMLElement;
    if (!country) throw new Error(`Request failed: country not found`);

    return country;
  }
}
