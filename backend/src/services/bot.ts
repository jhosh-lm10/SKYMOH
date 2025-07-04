import { Server as SocketIOServer } from 'socket.io';

const commonResponses: Record<string, string> = {
  hello: 'Hello! How can we assist you today?',
  pricing: 'Our pricing information is available on the website.',
  help: 'A team member will reach out shortly.'
};

export function runBot(io: SocketIOServer) {
  io.on('connection', (socket) => {
    socket.on('user-message', (msg: string) => {
      const key = msg.toLowerCase();
      if (commonResponses[key]) {
        socket.emit('bot-reply', commonResponses[key]);
      }
    });
  });
}
