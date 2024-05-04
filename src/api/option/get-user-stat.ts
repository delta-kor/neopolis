export type GetUserStatOption = GetUserStatLoginOption | GetUserStatChangeRoomOption;

export interface GetUserStatLoginOption {
  action: 'login';
}

export interface GetUserStatChangeRoomOption {
  action: 'changeRoom';
  roomFrom: number;
  roomTo: number;
}
