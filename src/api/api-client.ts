import { Profile } from '../profile';
import { ParsedQuery } from '../util';
import { RequestClient } from './request-client';
import { ServiceUrl } from './service-url';

export class ApiClient {
  private readonly requestClient: RequestClient = new RequestClient();

  constructor(private readonly profile: Profile) {}

  public async getUserStat(): Promise<HTMLElement> {
    const url = ServiceUrl.get('getUserStat');

    const query: ParsedQuery = {
      iauth: this.profile.iauth,
      user_id: this.profile.userId,
      first_request: 'true',
    };

    const response = await this.requestClient.shoot(url, query);
    return response;
  }
}
