import { Barn } from '../barn';
import { Field } from '../field';
import { UserStat } from './user-stat';

export interface SessionData {
  sessionKey: string;
  commandId: number;
  field: Field;
  barn: Barn;
  stat: UserStat;
}

export class Session {
  private requestNo: number | null = null;
  private data: SessionData | null = null;

  constructor() {}

  public init(country: Element): Session {
    const sessionKey = country.getAttribute('session_key');
    const commandId = country.getAttribute('server_cmd_id');

    if (!sessionKey) throw new Error('Session key not found');
    if (!commandId) throw new Error('Command ID not found');

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
      field,
      barn,
      stat,
    };

    return this;
  }

  public getRequestNo(): number {
    if (this.requestNo === null) {
      this.requestNo = 1;
      return 0;
    }

    return this.requestNo++;
  }

  public getSessionKey(): string {
    if (!this.data) throw new Error('Session not initialized');
    return this.data.sessionKey;
  }

  public getCommandId(): number {
    if (!this.data) throw new Error('Session not initialized');
    return ++this.data.commandId;
  }

  public getField(): Field {
    if (!this.data) throw new Error('Session not initialized');
    return this.data.field;
  }

  public getBarn(): Barn {
    if (!this.data) throw new Error('Session not initialized');
    return this.data.barn;
  }

  public getStat(): UserStat {
    if (!this.data) throw new Error('Session not initialized');
    return this.data.stat;
  }
}
