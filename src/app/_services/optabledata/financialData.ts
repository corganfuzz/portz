/* tslint:disable */
const DATA: any[] = [
  {
    Category: 'Metal',
    Type: 'Gold',
    Spread: 0.01,
    'Open Price': 1281.1,
    Price: 1280.7317,
    Buy: 1280.7267,
    Sell: 1280.7367,
    Change: -0.3683,
    'Change(%)': -0.0287,
    Volume: 48387,
    // 'High(D)': 1289.5,
    // 'Low(D)': 1279.1,
    // 'High(Y)': 1306,
    // 'Low(Y)': 1047.2,
    // 'Start(Y)': 1176.6,
    'Change On Year(%)': 8.8502,
  },
  {
    Category: 'Metal',
    Type: 'Silver',
    Spread: 0.01,
    'Open Price': 17.43,
    Price: 17.42,
    Buy: 17.43,
    Sell: 17.43,
    Change: -0.01,
    'Change(%)': -0.0574,
    Volume: 11720,
    // 'High(D)': 17.51,
    // 'Low(D)': 17.37,
    // 'High(Y)': 18.06,
    // 'Low(Y)': 13.73,
    // 'Start(Y)': 15.895,
    'Change On Year(%)': 9.5942,
  },
  {
    Category: 'Metal',
    Type: 'Copper',
    Spread: 0.02,
    'Open Price': 2.123,
    Price: 2.113,
    Buy: 2.123,
    Sell: 2.123,
    Change: -0.01,
    'Change(%)': -0.471,
    Volume: 28819,
    // 'High(D)': 2.16,
    // 'Low(D)': 2.11,
    // 'High(Y)': 2.94,
    // 'Low(Y)': 1.96,
    // 'Start(Y)': 2.45,
    'Change On Year(%)': -13.7551,
  },
  {
    Category: 'Metal',
    Type: 'Platinum',
    Spread: 0.01,
    'Open Price': 1071.6,
    Price: 1071.0993,
    Buy: 1071.0943,
    Sell: 1071.1043,
    Change: -0.5007,
    'Change(%)': -0.0467,
    Volume: 3039,
    // 'High(D)': 1081.2,
    // 'Low(D)': 1070.5,
    // 'High(Y)': 1120.6,
    // 'Low(Y)': 812.4,
    // 'Start(Y)': 966.5,
    'Change On Year(%)': 10.8225,
  },
  {
    Category: 'Metal',
    Type: 'Palladium',
    Spread: 0.01,
    'Open Price': 600.55,
    Price: 601.0005,
    Buy: 600.9955,
    Sell: 601.0055,
    Change: 0.4505,
    'Change(%)': 0.075,
    Volume: 651,
    // 'High(D)': 607.2,
    // 'Low(D)': 598.4,
    // 'High(Y)': 690,
    // 'Low(Y)': 458.6,
    // 'Start(Y)': 574.3,
    'Change On Year(%)': 4.6492,
  },
  {
    Category: 'Oil',
    Type: 'Oil',
    Spread: 0.015,
    'Open Price': 45.54,
    Price: 45.7899,
    Buy: 45.7824,
    Sell: 45.7974,
    Change: 0.2499,
    'Change(%)': 0.5487,
    Volume: 107196,
    // 'High(D)': 45.94,
    // 'Low(D)': 45.0,
    // 'High(Y)': 65.28,
    // 'Low(Y)': 30.79,
    // 'Start(Y)': 48.035,
    'Change On Year(%)': -4.6739,
  },
  {
    Category: 'Oil',
    Type: 'Brent',
    Spread: 0.01,
    'Open Price': 46.06,
    Price: 46.05,
    Buy: 46.06,
    Sell: 46.06,
    Change: -0.01,
    'Change(%)': -0.0217,
    Volume: 59818,
    // 'High(D)': 46.48,
    // 'Low(D)': 45.6,
    // 'High(Y)': 71.14,
    // 'Low(Y)': 30.02,
    // 'Start(Y)': 50.58,
    'Change On Year(%)': -8.9561,
  },
  {
    Category: 'Oil',
    Type: 'Natural Gas',
    Spread: 0.02,
    'Open Price': 2.094,
    Price: 2.104,
    Buy: 2.094,
    Sell: 2.094,
    Change: 0.01,
    'Change(%)': 0.4776,
    Volume: 2783,
    // 'High(D)': 2.11,
    // 'Low(D)': 2.09,
    // 'High(Y)': 3.2,
    // 'Low(Y)': 1.84,
    // 'Start(Y)': 2.52,
    'Change On Year(%)': -16.5079,
  },
  {
    Category: 'Oil',
    Type: 'RBOB Gas',
    Spread: 0.015,
    'Open Price': 1.5086,
    Price: 1.9532,
    Buy: 1.9457,
    Sell: 1.9607,
    Change: 0.4446,
    'Change(%)': 29.4686,
    Volume: 2646,
    // 'High(D)': 1.9532,
    // 'Low(D)': 1.5,
    // 'High(Y)': 2.05,
    // 'Low(Y)': 1.15,
    // 'Start(Y)': 1.6,
    'Change On Year(%)': 22.0727,
  },
  {
    Category: 'Oil',
    Type: 'Diesel',
    Spread: 0.015,
    'Open Price': 1.3474,
    Price: 1.3574,
    Buy: 1.3474,
    Sell: 1.3474,
    Change: 0.01,
    'Change(%)': 0.7422,
    Volume: 2971,
    // 'High(D)': 1.36,
    // 'Low(D)': 1.34,
    // 'High(Y)': 2.11,
    // 'Low(Y)': 0.92,
    // 'Start(Y)': 1.515,
    'Change On Year(%)': -10.4026,
  },
];

/* tslint:enable */
export class FinancialData {
  public generateData(count: number): any[] {
    const currData = [];
    for (let i = 0; i < count; i++) {
      const rand = Math.floor(Math.random() * Math.floor(DATA.length));
      const dataObj = Object.assign({}, DATA[rand]);
      this.randomizeObjectData(dataObj);
      currData.push(dataObj);
    }
    return currData;
  }
  private randomizeObjectData(dataObj) {
    const changeP = 'Change(%)';
    const res = this.generateNewPrice(dataObj.Price);
    dataObj.Change = res.Price - dataObj.Price;
    dataObj.Price = res.Price;
    dataObj[changeP] = res.ChangePercent;
  }
  private generateNewPrice(oldPrice): any {
    const rnd = parseFloat(Math.random().toFixed(2));
    const volatility = 2;
    let newPrice = 0;

    let changePercent = 2 * volatility * rnd;
    if (changePercent > volatility) {
      changePercent -= 2 * volatility;
    }

    const changeAmount = oldPrice * (changePercent / 100);
    newPrice = oldPrice + changeAmount;

    const result = { Price: 0, ChangePercent: 0 };
    result.Price = parseFloat(newPrice.toFixed(2));
    result.ChangePercent = parseFloat(changePercent.toFixed(2));

    return result;
  }
}
