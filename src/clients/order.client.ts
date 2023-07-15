import { Configuration } from '../model/client/client-options';

import { BaseClient } from '../http';
import { GetOrderDetailsResponse } from '../model/order/order.model';

export class OrderClient extends BaseClient {
  constructor(token: string, configOptions?: Configuration) {
    super(token, configOptions);
  }

  public getOrder(orderId: string): Promise<GetOrderDetailsResponse> {
    return this.get<GetOrderDetailsResponse>(`/orders/${orderId}`);
  }
}
