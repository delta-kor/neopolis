import { ApiClient } from '../api';
import { Profile } from '../profile';

export class NeoClient {
  private readonly apiClient: ApiClient = new ApiClient(this.profile);

  constructor(private readonly profile: Profile) {}

  public async login(): Promise<void> {
    const country = await this.apiClient.getUserStat();
    const sessionKey = country.getAttribute('session_key');
  }
}
