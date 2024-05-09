import { RequestQuery } from '../util';
import { CleanCommandPayload } from './clean';
import { PickCommandPayload } from './pick';
import { SendRequestPayload } from './send-request';
import { UpdateInviteNeighborsPayload } from './update-invite-neighbors';

export type CommandPayload =
  | PickCommandPayload
  | CleanCommandPayload
  | SendRequestPayload
  | UpdateInviteNeighborsPayload;

export interface CommandMetadata extends RequestQuery {
  cmd_id: number;
  room_id: number;
  uxtime: number;
}

export type Command = CommandPayload & CommandMetadata;

export * from './builder';
export * from './clean';
export * from './pick';
export * from './send-request';
export * from './update-invite-neighbors';
