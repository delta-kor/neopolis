export interface SendRequestPayload {
  command: 'send_request';
  name: string;
  friend_id: string;
}
