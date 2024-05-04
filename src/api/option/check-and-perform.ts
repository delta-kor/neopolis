import { Command } from '../../command';

export interface CheckAndPerformOption {
  commands: Command[];
  room: number;
}
