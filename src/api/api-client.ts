import { Session } from '../client';
import { Profile } from '../profile';
import { RequestQuery } from '../util';
import { CheckAndPerformOption, GetUserStatOption } from './option';
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
      rn: this.session.getRequestNo(),
    };

    if (option.action === 'login') {
      query.first_request = true;
    }

    if (option.action === 'changeRoom') {
      query.room_id = option.roomFrom;
      query.change_room = true;
      query.view_room_id = option.roomTo;
    }

    const response = await this.requestClient.shoot(url, query);
    return response;
  }

  public async checkAndPerform(option: CheckAndPerformOption): Promise<Element> {
    const url = ServiceUrl.get('checkAndPerform');

    const query: RequestQuery = {
      iauth: this.profile.iauth,
      user_id: this.profile.userId,
      rn: this.session.getRequestNo(),
      room_id: option.room,
      cached: option.commands,
    };

    const response = await this.requestClient.shoot(url, query);
    if (!response.querySelector('ok')) throw new Error('Failed to check and perform');

    return response;
  }
}
