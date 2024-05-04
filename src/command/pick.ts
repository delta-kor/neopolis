export interface PickCommandPayload {
  command: 'pick';
  item_id: string;
  owner_picker_id?: string; // Cellular station id
  picker_up_ids?: string[]; // Cellular station upgrade building ids
}
