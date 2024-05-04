import { ApiClient } from '../api';
import { Profile } from '../profile';
import { Session } from './session';

export class NeoClient {
  private readonly session: Session = new Session();
  private readonly apiClient: ApiClient = new ApiClient(this.profile, this.session);

  constructor(private readonly profile: Profile) {}

  public async login(): Promise<void> {
    const country = await this.apiClient.getUserStat({ login: true });
    this.session.init(country);
  }
}
