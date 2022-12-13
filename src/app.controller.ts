import { Body, Controller, Get, Post } from '@nestjs/common';
/* import { AppService } from './app.service'; */
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getAllNotifications() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async createNotification(@Body() body: any) {
    const { recipientId, category, content } = body;
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        recipientId,
        content,
        category,
      },
    });
  }
}
