import { Content } from './content';

describe('Notification Content', () => {
  it('Should be able to create a notification content correctly', () => {
    const content = new Content('You have received a new notification');

    expect(content).toBeTruthy();
  });

  it('Should not be able to create a notification content w less than 5 characters', () => {
    expect(() => new Content('abc')).toThrow();
  });

  it('Should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
