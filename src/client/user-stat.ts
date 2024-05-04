export class UserStat {
  public level!: number;
  public exp!: number;
  public coin!: number;
  public gold!: number;

  constructor(country: Element) {
    this.update(country);
  }

  public update(country: Element) {
    const level = country.getAttribute('level');
    const exp = country.getAttribute('exp');
    const coin = country.getAttribute('coins');
    const gold = country.getAttribute('gold');

    if (level === null) throw new Error('Level not found');
    if (exp === null) throw new Error('Exp not found');
    if (coin === null) throw new Error('Coin not found');
    if (gold === null) throw new Error('Gold not found');

    this.level = parseInt(level);
    this.exp = parseInt(exp);
    this.coin = parseInt(coin);
    this.gold = parseInt(gold);
  }
}
