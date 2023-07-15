import { Configuration } from '../model/client/client-options';

import { BaseClient } from '../http';
import {
  GetRestaurantStatusResponse,
  GetStoreHolidayHoursResponse,
  GetStoreResponse,
  GetStoresResponse,
  SetRestaurantStatus,
  SetRestaurantStatusResponse,
  SetStoreHolidayHours,
  SetStoreHolidayHoursResponse,
} from '../model/store/store.model';

export class StoreClient extends BaseClient {
  constructor(token: string, configOptions?: Configuration) {
    super(token, configOptions);
  }

  public getStore(storeId: string): Promise<GetStoreResponse> {
    return this.get<GetStoreResponse>(`/v1/eats/stores/${storeId}`);
  }

  public getStores(): Promise<GetStoresResponse> {
    return this.get<GetStoresResponse>('/v1/eats/stores');
  }

  public getRestaurantStatus(storeId: string): Promise<GetRestaurantStatusResponse> {
    return this.get<GetRestaurantStatusResponse>(`/v1/eats/stores/${storeId}/status`);
  }

  public setRestaurantStatus(
    storeId: string,
    setRestaurantStatus: SetRestaurantStatus,
  ): Promise<SetRestaurantStatusResponse> {
    return this.post<SetRestaurantStatusResponse>(`/v1/eats/stores/${storeId}/status`, setRestaurantStatus);
  }

  public getStoreHolidayHours(storeId: string): Promise<GetStoreHolidayHoursResponse> {
    return this.get<GetStoreHolidayHoursResponse>(`/v1/eats/stores/${storeId}/holiday-hours`);
  }

  public setStoreHolidayHours(
    storeId: string,
    setStoreHolidayHours: SetStoreHolidayHours,
  ): Promise<SetStoreHolidayHoursResponse> {
    return this.post<SetStoreHolidayHoursResponse>(`/v1/eats/stores/${storeId}/holiday-hours`, setStoreHolidayHours);
  }
}
