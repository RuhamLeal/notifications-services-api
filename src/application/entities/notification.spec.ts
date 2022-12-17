import { Content } from './content';
import { Notification } from './notification';

describe('Notification Content', () => {
  it('Should be able to create a notification content correctly', () => {
    const notification = new Notification({
      content: new Content('You have received a new notification'),
      category: 'Social',
      recipientId: '2310SFDFSD987X5612',
    });

    expect(notification).toBeTruthy();
  });
});
