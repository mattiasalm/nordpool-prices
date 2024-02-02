import { NordPoolPrices } from '../../src/services/NordPoolPrices';

describe('NordPoolPrices', () => {
  describe('hourly', () => {
    test('should return hourly prices', async () => {
      const data = await NordPoolPrices.hourly();
      expect(data).toBeTruthy();
    });
  });
  describe('daily', () => {
    test('should return daily prices', async () => {
      const data = await NordPoolPrices.daily();
      expect(data).toBeTruthy();
    });
  });
  describe('weekly', () => {
    test('should return weekly prices', async () => {
      const data = await NordPoolPrices.weekly();
      expect(data).toBeTruthy();
    });
  });
  describe('monthly', () => {
    test('should return monthly prices', async () => {
      const data = await NordPoolPrices.monthly();
      expect(data).toBeTruthy();
    });
  });
  describe('yearly', () => {
    test('should return yearly prices', async () => {
      const data = await NordPoolPrices.yearly();
      expect(data).toBeTruthy();
    });
  });

  describe('general', () => {
    test('should return prices in SEK', async () => {
      const data = await NordPoolPrices.hourly({
        currency: 'SEK',
      });
      expect(data.unit).toContain('SEK');
    });
    test('should return prices for area SE1', async () => {
      const data = await NordPoolPrices.hourly({
        areas: ['SE1'],
      });
      expect(data.datePrices[0].areas[0].area).toEqual('SE1');
    });
  });
});
