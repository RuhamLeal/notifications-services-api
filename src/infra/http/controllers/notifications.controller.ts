import { CancelNotification } from '@application/use-cases/cancel-notification';
import { SendNotification } from '@application/use-cases/send-notification';
import { CreateNotificationBody } from '@infra/create-notification-body';
import { Body, Controller, Post, Patch, Param } from '@nestjs/common';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
  ) {}

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({
      notificationId: id,
    });
  }

  @Post()
  async createNotification(@Body() body: CreateNotificationBody) {
    const { recipientId, category, content } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification: NotificationViewModel.toHTTP(notification) };
  }
}
