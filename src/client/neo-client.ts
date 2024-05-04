import { ApiClient } from '../api';
import { Building, ResidentialBuilding } from '../building';
import { Command, CommandBuilder } from '../command';
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

  public async pick(buildings: Building[], room: number): Promise<NeoClient> {
    for (const building of buildings) {
      if (!(building instanceof ResidentialBuilding))
        throw new Error(`Building ${building.name} (${building.id}) is not a residential building`);
    }

    const commands: Command[] = [];
    for (const building of buildings) {
      const command = this.commandBuilder.create({ command: 'pick', item_id: building.id }, room);
      commands.push(command);
    }

    await this.apiClient.checkAndPerform({ commands, room });

    return this;
  }

  public get field(): Field {
    return this.session.field;
  }
}
