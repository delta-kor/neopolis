import { Session } from '../client';
import { Profile } from '../profile';
import { RequestQuery } from '../util';
import { GetUserStatOption } from './option';
import { RequestClient } from './request-client';
import { ServiceUrl } from './service-url';

export class ApiClient {
  private readonly requestClient: RequestClient = new RequestClient();

  constructor(
    private readonly profile: Profile,
    private readonly session: Session
  ) {}

  public async getUserStat(option: GetUserStatOption): Promise<Element> {
    const url = ServiceUrl.get('getUserStat');

    const query: RequestQuery = {
      iauth: this.profile.iauth,
      user_id: this.profile.userId,
      first_request: option.login,
      rn: this.session.getRequestNo(),
    };

    const response = await this.requestClient.shoot(url, query);
    return response;
  }
}
