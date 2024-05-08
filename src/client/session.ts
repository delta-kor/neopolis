import { Barn } from '../barn';
import { Field } from '../field';
import { State } from '../state';
import { UserStat } from './user-stat';

export interface SessionData {
  sessionKey: string;
  commandId: number;
  cityName: string;
  field: Field;
  barn: Barn;
  stat: UserStat;
  state?: State;
}

export class Session {
  private requestNo: number | null = null;
  private data: SessionData | null = null;

  constructor() {}

  public init(country: Element): Session {
    const sessionKey = country.getAttribute('session_key');
    const commandId = country.getAttribute('server_cmd_id');
    const cityName = country.getAttribute('city_name');

    if (!sessionKey) throw new Error('Session key not found');
    if (!commandId) throw new Error('Command ID not found');
    if (!cityName) throw new Error('City name not found');

    const fieldElement = country.querySelector('field');
    const barnElement = country.querySelector('barn');

    if (!fieldElement) throw new Error('Field not found');
    if (!barnElement) throw new Error('Barn not found');

    const field = new Field();
    field.set(fieldElement, 0);
    const barn = new Barn(barnElement);
    const stat = new UserStat(country);

    this.data = {
      sessionKey: sessionKey,
      commandId: parseInt(commandId),
      cityName,
      field,
      barn,
      stat,
    };

    if (State.hasState(country)) this.data.state = new State(country);

    return this;
  }

  public getRequestNo(): number {
    if (this.requestNo === null) {
      this.requestNo = 1;
      return 0;
    }

    return this.requestNo++;
  }

  public getCommandId(): number {
    if (!this.data) throw new Error('Session not initialized');
    return ++this.data.commandId;
  }

  public get sessionKey(): string {
    if (!this.data) throw new Error('Session not initialized');
    return this.data.sessionKey;
  }

  public get cityName(): string {
    if (!this.data) throw new Error('Session not initialized');
    return this.data.cityName;
  }

  public get field(): Field {
    if (!this.data) throw new Error('Session not initialized');
    return this.data.field;
  }

  public get barn(): Barn {
    if (!this.data) throw new Error('Session not initialized');
    return this.data.barn;
  }

  public get stat(): UserStat {
    if (!this.data) throw new Error('Session not initialized');
    return this.data.stat;
  }
}
