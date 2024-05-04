import { RequestQuery } from '../util';
import { CleanCommandPayload } from './clean';
import { PickCommandPayload } from './pick';

export type CommandPayload = PickCommandPayload | CleanCommandPayload;

export interface CommandMetadata extends RequestQuery {
  cmd_id: number;
  room_id: number;
  uxtime: number;
}

export type Command = CommandPayload & CommandMetadata;

export * from './builder';
export * from './clean';
export * from './pick';
