import { MotorcycleModel, LineName } from './types';

// Data extracted from the provided list
export const MOTORCYCLE_DATABASE: MotorcycleModel[] = [
  // --- L1 CTG ---
  { id: '1', name: 'Advance R 125', maxCadence: 27, workContent: 91, line: LineName.L1 },
  { id: '2', name: 'Advance X1 Fi', maxCadence: 20, workContent: 110, line: LineName.L1 },
  { id: '3', name: 'Agility Fusion', maxCadence: 28, workContent: 91, line: LineName.L1 },
  { id: '4', name: 'New Life 125', maxCadence: 23, workContent: 91, line: LineName.L1 },
  { id: '5', name: 'MRX 125 CBS', maxCadence: 21, workContent: 124, line: LineName.L1 },
  { id: '6', name: 'ONE MP', maxCadence: 25, workContent: 91, line: LineName.L1 },
  { id: '7', name: 'Twist', maxCadence: 17, workContent: 97, line: LineName.L1 },
  { id: '8', name: 'COMBAT 100', maxCadence: 20, workContent: 131, line: LineName.L1 },
  { id: '9', name: 'RAIDER 125', maxCadence: 21, workContent: 91.7, line: LineName.L1 },
  { id: '10', name: 'BET 150 ABS', maxCadence: 20, workContent: 131, line: LineName.L1 },
  { id: '11', name: 'NEO NX 110', maxCadence: 22, workContent: 108, line: LineName.L1 },
  
  // --- L2 CTG ---
   { id: '12', name: 'ADVANCE X1 FI', maxCadence: 21.4, workContent: 131, line: LineName.L2 },
 { id: '13', name: 'BOMBER 125', maxCadence: 24.2, workContent: 131, line: LineName.L2 },
 { id: '14', name: 'MRX 125 CBS', maxCadence: 25.9, workContent: 97, line: LineName.L2 },
 { id: '15', name: 'MRX 150', maxCadence: 25, workContent: 110, line: LineName.L2 },
 { id: '16', name: 'MRX ARIZONA', maxCadence: 24, workContent: 120, line: LineName.L2 },
 { id: '17', name: 'MRX 200', maxCadence: 23.1, workContent: 115, line: LineName.L2 },
 { id: '18', name: 'NITRO 125', maxCadence: 120, workContent: 144.6666667, line: LineName.L2 },
 { id: '19', name: 'ONE MP CBS', maxCadence: 20, workContent: 91, line: LineName.L2 },
 { id: '20', name: 'VENOM 14', maxCadence: 18.6, workContent: 180, line: LineName.L2 },
 { id: '21', name: 'VENOM 18', maxCadence: 19.9, workContent: 141.8, line: LineName.L2 },
 { id: '22', name: 'SWITCH 125 CBS', maxCadence: 20, workContent: 140, line: LineName.L2 },
 { id: '23', name: 'APACHE 160 4V FI', maxCadence: 20, workContent: 132, line: LineName.L2},
];

export const DEFAULT_SHIFT_CONFIG = {
  startTime: '06:00',
  endTime: '14:00',
  breaks: {
    am: 15,
    lunch: 30,
    pm: 15
  },
  workingDaysPerMonth: 24
};
