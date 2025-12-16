export enum LineName {
  L1 = 'L1 CTG',
  L2 = 'L2 CTG'
}

export interface MotorcycleModel {
  id: string;
  name: string;
  maxCadence: number;
  workContent: number; // In minutes per unit (derived from W.C or calculated)
  line: LineName;
}

export interface ShiftConfig {
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  breaks: {
    am: number; // minutes
    pm: number; // minutes
    lunch: number; // minutes
  };
  workingDaysPerMonth: number;
}

export interface SimulationResult {
  requiredPersonnel: number;
  taktTime: number; // seconds
  newWorkContent: number; // This might be static, but good to have in result
  personnelDelta: number; // Difference from current
  dailyOutput: number;
  monthlyOutput: number;
}
