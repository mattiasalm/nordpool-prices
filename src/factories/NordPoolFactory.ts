import { NordPoolResponse, ParsedResponse } from '../types';

const parseResponse = (response: NordPoolResponse): ParsedResponse => ({
  unit: response.Units[0],
  datePrices: response.Rows.filter((row) => !row.IsExtraRow).map((row) => ({
    startDate: row.StartTime,
    endDate: row.EndTime,
    name: row.Name.replace(/&nbsp;/g, ' '),
    areas: row.Columns.map((column) => ({
      area: column.Name,
      price:
        column.Value === '-'
          ? null
          : parseFloat(column.Value.replace(',', '.').replaceAll(' ', '')),
    })),
  })),
});

const filterResponseOnArea = (
  response: ParsedResponse,
  areas: string[],
): ParsedResponse => ({
  ...response,
  datePrices: response.datePrices.map((datePrice) => ({
    ...datePrice,
    areas: datePrice.areas.filter((area) =>
      areas.length ? areas.includes(area.area) : true,
    ),
  })),
});

export const NordPoolFactory = {
  parseResponse,
  filterResponseOnArea,
};
