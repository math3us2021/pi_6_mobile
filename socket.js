import { io } from 'socket.io-client';

export const socket = io('http://20.83.150.110:3000');
// export const socket = io('http://10.0.2.2:3000'); // Android emulator
// export const socket = io('http://192.168.100.64:3000');
