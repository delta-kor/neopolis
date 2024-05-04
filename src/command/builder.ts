import { Session } from '../client';
import { Command, CommandPayload } from './index';

export class CommandBuilder {
  constructor(private readonly session: Session) {}

  public create(data: CommandPayload, room: number): Command {
    return {
      ...data,
      cmd_id: this.session.getCommandId(),
      room_id: room,
      uxtime: Math.round(Date.now() / 1000),
    };
  }
}
