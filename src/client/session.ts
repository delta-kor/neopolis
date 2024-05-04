export interface SessionData {
  sessionKey: string;
  commandId: number;
}

export class Session {
  private requestNo: number | null = null;
  private data: SessionData | null = null;

  constructor() {}

  public init(country: HTMLElement): Session {
    const sessionKey = country.getAttribute('session_key');
    const commandId = country.getAttribute('server_cmd_id');

    if (!sessionKey) throw new Error('Session key not found');
    if (!commandId) throw new Error('Command ID not found');

    this.data = { sessionKey: sessionKey, commandId: parseInt(commandId) };

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
}
