import { Message } from './types/messages';

export const getMessages = () =>
  new Promise<Message[]>(resolve =>
    setTimeout(
      () =>
        resolve([
          {
            text: 'Hello! je souhaiterais vends mon armoire Ikea',
            date: '1567637626',
            private: false
          },
          {
            text: 'Vends TV 4K UHD',
            date: '1567641226',
            private: false
          },
          {
            text: 'Vends une',
            date: '1567644826',
            private: true
          }
        ]),
      200
    )
  );
