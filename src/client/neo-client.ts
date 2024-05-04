import { ApiClient } from '../api';
import { CommandBuilder } from '../command';
import { Field } from '../field';
import { Profile } from '../profile';
import { Session } from './session';

export class NeoClient {
  private readonly session: Session = new Session();
  private readonly apiClient: ApiClient = new ApiClient(this.profile, this.session);
  private readonly commandBuilder: CommandBuilder = new CommandBuilder(this.session);

  constructor(private readonly profile: Profile) {}

  public async login(): Promise<NeoClient> {
    const country = await this.apiClient.getUserStat({ action: 'login' });
    this.session.init(country);

    return this;
  }

  public async pick(item: Element, room: number): Promise<NeoClient> {
    const command = this.commandBuilder.create({ command: 'pick', item_id: '234' }, room);
    await this.apiClient.checkAndPerform({ commands: [command], room });

    return this;
  }

  public get field(): Field {
    return this.session.field;
  }
}
