export type ServiceName = 'getUserStat' | 'checkAndPerform' | 'getInfo';

export class ServiceUrl {
  public static get(serviceName: ServiceName): string {
    switch (serviceName) {
      case 'getUserStat':
        return 'https://cf-city-int.socialquantum.com/get_user_stat';
      case 'checkAndPerform':
        return 'https://cf-city-int.socialquantum.com/check_and_perform';
      case 'getInfo':
        return 'https://cf-city-int.socialquantum.com/get_info';
      default:
        throw new Error(`Service ${serviceName} does not exist`);
    }
  }
}
