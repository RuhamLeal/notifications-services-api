import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repositories';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found-error';

describe('Cancel Notification', () => {
  it('Should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      category: 'Social',
      content: new Content('New request'),
      recipientId: '14121FSADF213123AD',
    });

    await notificationsRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('Should not be able to cancel a notification when it does not exists', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
