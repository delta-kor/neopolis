import { RequestQuery } from '../util';
import { PickCommandPayload } from './pick';

export type CommandPayload = PickCommandPayload;

export interface CommandMetadata extends RequestQuery {
  cmd_id: number;
  room_id: number;
  uxtime: number;
}

export type Command = CommandPayload & CommandMetadata;

export * from './builder';
export * from './pick';
