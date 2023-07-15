import { Configuration } from '../model/client/client-options';

import { BaseClient } from '../http';
import {
  AcceptOrder,
  AcceptOrderResponse,
  CancelOrderResponse,
  DenyOrder,
  DenyOrderResponse,
  GetActiveCreatedOrdersResponse,
  GetLatestCancelledOrdersResponse,
  GetOrderDetailsResponse,
  PatchCart,
  PatchCartResponse,
  UpdateDeliveryStatus,
  UpdateDeliveryStatusResponse,
} from '../model/order/order.model';

export class OrderClient extends BaseClient {
  constructor(token: string, configOptions?: Configuration) {
    super(token, configOptions);
  }

  public getOrder(orderId: string): Promise<GetOrderDetailsResponse> {
    return this.get<GetOrderDetailsResponse>(`/orders/${orderId}`);
  }

  public getActiveCreatedOrders(storeId: string): Promise<GetActiveCreatedOrdersResponse> {
    return this.get<GetActiveCreatedOrdersResponse>(`/stores/${storeId}/created-orders`);
  }

  public getLatestCancelledOrders(storeId: string): Promise<GetLatestCancelledOrdersResponse> {
    return this.get<GetLatestCancelledOrdersResponse>(`/stores/${storeId}/canceled-orders`);
  }

  public acceptOrder(orderId: string, acceptOrder: AcceptOrder): Promise<AcceptOrderResponse> {
    return this.post<AcceptOrderResponse>(`/orders/${orderId}/accept_pos_order`, acceptOrder);
  }

  public denyOrder(orderId: string, denyOrder: DenyOrder): Promise<DenyOrderResponse> {
    return this.post<DenyOrderResponse>(`/orders/${orderId}/deny_pos_order`, denyOrder);
  }

  public cancelOrder(orderId: string): Promise<CancelOrderResponse> {
    return this.post<CancelOrderResponse>(`/orders/${orderId}/cancel`, {});
  }

  public patchCart(orderId: string, patchCart: PatchCart): Promise<PatchCartResponse> {
    return this.patch<PatchCartResponse>(`/orders/${orderId}/cart`, patchCart);
  }

  public updateDeliveryStatus(
    orderId: string,
    updateDeliveryStatus: UpdateDeliveryStatus,
  ): Promise<UpdateDeliveryStatusResponse> {
    return this.post<UpdateDeliveryStatusResponse>(
      `/orders/${orderId}/restaurantdelivery/status`,
      updateDeliveryStatus,
    );
  }
}
