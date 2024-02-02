# nordpool-prices

[![npm version](https://badge.fury.io/js/nordpool-prices.svg)](https://badge.fury.io/js/nordpool-prices)

```typescript
// Example
import { NordPoolPrices } from 'nordpool-prices';

const areas = ['SE1', 'SE2', 'SE3', 'SE4'];
const currency = 'SEK';
const dataToday = await NordPoolPrices.hourly({
  areas,
  currency,
  endDate: '23-03-2023',
});
```
