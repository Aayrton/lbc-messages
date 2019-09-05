import { Message } from 'types/messages';

let data: Message[] = [
  {
    text: 'Hello! je souhaiterais vendre mon armoire Ikea',
    date: 1567637626,
    private: false
  },
  {
    text: 'Vends TV 4K UHD',
    date: 1567641226,
    private: false
  },
  {
    text: 'Vends une',
    date: 1567644826,
    private: true
  },
  {
    text: 'Achete ps4 neuvre sur Paris',
    date: 1567709878,
    private: false
  },
  {
    text: '1 + 1 = 2',
    date: 1567709878,
    private: false
  }
];

export const getMessages = () =>
  new Promise<Message[]>(resolve => setTimeout(() => resolve(data), 200));

export const createMessage = (message: Message) =>
  new Promise<Message[]>(resolve =>
    setTimeout(() => {
      data = [...data, message];
      resolve(data);
    }, 200)
  );
