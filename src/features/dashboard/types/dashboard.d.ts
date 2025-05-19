export interface ISensorData {
  temperature: number;
  feed_status: number | string | boolean;
  fan_status: boolean;
  lamp_status: boolean;
  feed_qty: number;
}
export interface ISchedules {
  id: number;
  hour: string;
  minute: string;
}

export interface ISchedulePayload {
  hour: string;
  minute: string;
}
