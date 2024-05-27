import { io } from 'socket.io-client';

export const socket = io('http://192.168.100.64:3000');
// export const socket = io('http://192.168.100.58:3000');