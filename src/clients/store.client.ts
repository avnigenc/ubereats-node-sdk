import { Configuration } from '../model/client/client-options';

import { BaseClient } from '../http';
import { GetStoreResponse } from '../model/store/store.model';

export class StoreClient extends BaseClient {
  constructor(token: string, configOptions?: Configuration) {
    super(token, configOptions);
  }

  public getStore(storeId: string): Promise<GetStoreResponse> {
    return this.get<GetStoreResponse>(`/v1/eats/stores/${storeId}`);
  }
}
