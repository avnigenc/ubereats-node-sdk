export interface Store {
  name: string;
  store_id: string;
  location: Location;
  contact_emails: string[];
  raw_hero_url: string;
  price_bucket: string;
  avg_prep_time: number;
  status: string;
  merchant_store_id: string;
  timezone: string;
  web_url: string;
  pos_data: PosData;
}

export interface Location {
  address: string;
  address_2: string;
  city: string;
  country: string;
  postal_code: string;
  state: string;
  latitude: number;
  longitude: number;
}

export interface PosData {
  integration_enabled: boolean;
  order_manager_client_id: string;
  integrator_store_id: string;
  integrator_brand_id: string;
  store_configuration_data: string;
  is_order_manager_pending: boolean;
}

export class GetStore {
  public store_id: string;

  constructor(storeId: string) {
    this.store_id = storeId;
  }
}

export class GetStoreResponse implements Store {
  avg_prep_time: number;
  contact_emails: string[];
  location: Location;
  merchant_store_id: string;
  name: string;
  pos_data: PosData;
  price_bucket: string;
  raw_hero_url: string;
  status: string;
  store_id: string;
  timezone: string;
  web_url: string;

  constructor(
    avg_prep_time: number,
    contact_emails: string[],
    location: Location,
    merchant_store_id: string,
    name: string,
    pos_data: PosData,
    price_bucket: string,
    raw_hero_url: string,
    status: string,
    store_id: string,
    timezone: string,
    web_url: string,
  ) {
    this.avg_prep_time = avg_prep_time;
    this.contact_emails = contact_emails;
    this.location = location;
    this.merchant_store_id = merchant_store_id;
    this.name = name;
    this.pos_data = pos_data;
    this.price_bucket = price_bucket;
    this.raw_hero_url = raw_hero_url;
    this.status = status;
    this.store_id = store_id;
    this.timezone = timezone;
    this.web_url = web_url;
  }
}

export class GetStores {
  public limit?: number;
  public start_key?: string;

  constructor(limit?: number, startKey?: string) {
    this.limit = limit;
    this.start_key = startKey;
  }
}

export class GetStoresResponse {
  next_key: string;
  stores: Store[];

  constructor(next_key: string, stores: Store[]) {
    this.next_key = next_key;
    this.stores = stores;
  }
}

export class GetRestaurantStatus {
  public store_id: string;

  constructor(storeId: string) {
    this.store_id = storeId;
  }
}

export class GetRestaurantStatusResponse {
  status: 'ONLINE' | 'OFFLINE';
  offlineReason: 'OUT_OF_MENU_HOURS' | 'INVISIBLE' | 'PAUSED_BY_UBER' | 'PAUSED_BY_RESTAURANT';

  constructor(
    status: 'ONLINE' | 'OFFLINE',
    offlineReason: 'OUT_OF_MENU_HOURS' | 'INVISIBLE' | 'PAUSED_BY_UBER' | 'PAUSED_BY_RESTAURANT',
  ) {
    this.status = status;
    this.offlineReason = offlineReason;
  }
}

export class SetRestaurantStatus {
  public status: 'ONLINE' | 'PAUSED';
  public paused_until: string;
  public reason: string;

  constructor(status: 'ONLINE' | 'PAUSED', paused_until: string, reason: string) {
    this.status = status;
    this.paused_until = paused_until;
    this.reason = reason;
  }
}

export class SetRestaurantStatusResponse {}

export class GetStoreHolidayHours {
  public store_id: string;

  constructor(storeId: string) {
    this.store_id = storeId;
  }
}

export class GetStoreHolidayHoursResponse {
  holiday_hours: Record<
    string,
    {
      open_time_periods: {
        start_time: string;
        end_time: string;
      }[];
    }
  >;

  constructor(holiday_hours: Record<string, { open_time_periods: { start_time: string; end_time: string }[] }>) {
    this.holiday_hours = holiday_hours;
  }
}

export class SetStoreHolidayHours {
  public holiday_hours: Record<
    string,
    {
      open_time_periods: {
        start_time: string;
        end_time: string;
      }[];
    }
  >;

  constructor(
    holiday_hours: Record<
      string,
      {
        open_time_periods: { start_time: string; end_time: string }[];
      }
    >,
  ) {
    this.holiday_hours = holiday_hours;
  }
}

export class SetStoreHolidayHoursResponse {}
