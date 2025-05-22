export interface ISensorData {
  suhu: number;
  status_pakan: number | string | boolean;
  status_kipas: boolean;
  status_lampu: boolean;
  jumlah_pakan: number;
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
