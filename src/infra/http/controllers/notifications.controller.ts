import { CreateNotificationBody } from '@infra/create-notification-body';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('notifications')
export class NotificationsController {
  @Post()
  async createNotification(@Body() body: CreateNotificationBody) {
    const { recipientId, category, content } = body;
  }
}
