import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('Should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'A new Notification',
      category: 'Social',
      recipientId: '12341FAFA543DS',
    });

    expect(notification).toBeTruthy();
  });
});
