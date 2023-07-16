export interface Order {
  id: string;
  display_id: string;
  external_reference_id: string;
  current_state: OrderState;
  store: Store;
  eater: Eater;
  eaters: {
    id: string;
    first_name: string;
  }[];
  cart: Cart;
  payment: Payment;
  placed_at: string;
  estimated_ready_for_pickup_at: string;
  type: string;
  brand: string;
  order_manager_client_id: string;
  deliveries: Delivery[];
}

export enum OrderState {
  Created = 'created',
  Accepted = 'accepted',
  Denied = 'denied',
  Finished = 'finished',
  Canceled = 'canceled',
  Unknown = 'unknown',
}

export interface Store {
  id: string;
  name: string;
  external_reference_id: string;
  integrator_store_id: string;
  integrator_brand_id: string;
  merchant_store_id: string;
}

export interface Eater {
  first_name: string;
  phone: string;
  phone_code: string;
}

export interface Cart {
  items: Item[];
  fulfillment_issues: FulfillmentIssue[];
}

export interface Item {
  id: string;
  instance_id: string;
  title: string;
  external_data: string;
  quantity: number;
  price: Price;
  selected_modifier_groups?: SelectedModifierGroup[];
  eater_id: string;
  special_instructions?: string;
  taxInfo?: {
    labels: string[];
  };
}

export interface Price {
  unit_price: BasePrice;
  total_price: BasePrice;
  base_unit_price: BasePrice;
  base_total_price: BasePrice;
  taxInfo?: {
    labels: string[];
  };
}

export interface BasePrice {
  amount: number;
  currency_code: string;
  formatted_amount: string;
}

export interface SelectedModifierGroup {
  id: string;
  title: string;
  external_data: string;
  selected_items?: SelectedItem[];
  removed_items?: RemovedItem[];
}

export interface SelectedItem {
  id: string;
  title: string;
  external_data: string;
  quantity: number;
  price: Price;
  default_quantity: number;
}

export interface RemovedItem {
  id: string;
  title: string;
  external_data: string;
  quantity: number;
  price: Price;
  default_quantity: number;
}

export interface FulfillmentIssue {
  fulfillment_issue_type: string;
  fulfillment_action_type?: string;
  root_item: RootItem;
  item_availability_info: ItemAvailabilityInfo;
  item_substitute?: ItemSubstitute;
}

export interface RootItem {
  id: string;
  instance_id: string;
  title: string;
  external_data: string;
  quantity: number;
  fulfillment_action: FulfillmentAction;
}

export interface FulfillmentAction {
  fulfillment_action_type: string;
}

export interface ItemAvailabilityInfo {
  items_requested: number;
  items_available: number;
}

export interface ItemSubstitute {
  id: string;
  title: string;
  external_data: string;
  quantity: number;
  price: Price;
  selected_modifier_groups: any;
  special_instructions: string;
  instance_id: string;
}

export interface Payment {
  charges: Charges;
  accounting: Accounting;
}

export interface Charges {
  total: BasePrice;
  sub_total: BasePrice;
  tax: BasePrice;
  total_fee: BasePrice;
  cash_amount_due: BasePrice;
}

export interface Accounting {
  taxRemittance: TaxRemittance;
  tax_reporting?: TaxReporting;
}

export interface TaxRemittance {
  tax: Tax2;
  totalFeeTax: any;
  deliveryFeeTax: any;
  smallOrderFeeTax: any;
}

export interface Tax2 {
  uber: Uber[];
  restaurant: any;
  courier: any;
  eater: any;
}

export interface Uber {
  value: Value;
}

export interface Value {
  amount: number;
  currencyCode: string;
  formattedAmount: string;
}

export interface TaxReporting {
  breakdown: {
    items: Item2[];
  };
  destination: Destination;
  origin: Origin;
}

export interface Item2 {
  description: string;
  gross_amount: BasePrice;
  instance_id: string;
  net_amount: BasePrice;
  taxes: Tax3[];
  total_tax: BasePrice;
}

export interface Tax3 {
  calculated_tax: BasePrice;
  imposition: Imposition;
  is_inclusive: boolean;
  jurisdiction: Jurisdiction;
  rate: string;
  tax_remittance: string;
  taxable_amount: BasePrice;
}

export interface Imposition {
  description: string;
  name: string;
}

export interface Jurisdiction {
  level: string;
  name: string;
}

export interface Destination {
  country_iso2: string;
  id: string;
  postal_code: string;
}

export interface Origin {
  country_iso2: string;
  id: string;
  postal_code: string;
}

export interface Delivery {
  id: string;
  first_name: string;
  vehicle: Vehicle;
  picture_url: string;
  estimated_pickup_time: string;
  current_state: string;
  phone: string;
  phone_code: string;
}

export interface Vehicle {
  make: string;
  model: string;
  license_plate: string;
}

export class GetOrderDetails {
  public order_id: string;

  constructor(orderId: string) {
    this.order_id = orderId;
  }
}

export class GetOrderDetailsResponse implements Order {
  brand: string;
  cart: Cart;
  current_state: OrderState;
  deliveries: Delivery[];
  display_id: string;
  eater: Eater;
  eaters: {
    id: string;
    first_name: string;
  }[];
  estimated_ready_for_pickup_at: string;
  external_reference_id: string;
  id: string;
  order_manager_client_id: string;
  payment: Payment;
  placed_at: string;
  store: Store;
  type: string;

  constructor(
    brand: string,
    cart: Cart,
    current_state: OrderState,
    deliveries: Delivery[],
    display_id: string,
    eater: Eater,
    eaters: {
      id: string;
      first_name: string;
    }[],
    estimated_ready_for_pickup_at: string,
    external_reference_id: string,
    id: string,
    order_manager_client_id: string,
    payment: Payment,
    placed_at: string,
    store: Store,
    type: string,
  ) {
    this.brand = brand;
    this.cart = cart;
    this.current_state = current_state;
    this.deliveries = deliveries;
    this.display_id = display_id;
    this.eater = eater;
    this.eaters = eaters;
    this.estimated_ready_for_pickup_at = estimated_ready_for_pickup_at;
    this.external_reference_id = external_reference_id;
    this.id = id;
    this.order_manager_client_id = order_manager_client_id;
    this.payment = payment;
    this.placed_at = placed_at;
    this.store = store;
    this.type = type;
  }
}

export class GetActiveCreatedOrders {
  public store_id: string;

  constructor(storeId: string) {
    this.store_id = storeId;
  }
}

export class GetActiveCreatedOrdersResponse {
  orders: Pick<Order, 'id' | 'current_state' | 'placed_at'>[];

  constructor(orders: Pick<Order, 'id' | 'current_state' | 'placed_at'>[]) {
    this.orders = orders;
  }
}

export class GetLatestCancelledOrders {
  public store_id: string;

  constructor(storeId: string) {
    this.store_id = storeId;
  }
}

export class GetLatestCancelledOrdersResponse {
  orders: Pick<Order, 'id' | 'current_state' | 'placed_at'>[];

  constructor(orders: Pick<Order, 'id' | 'current_state' | 'placed_at'>[]) {
    this.orders = orders;
  }
}

export class AcceptOrder {
  public reason: string;
  public external_reference_id: string;
  public fields_relayed: {
    order_special_instructions: true;
    promotions: true;
  };

  constructor(
    reason: string,
    external_reference_id: string,
    fields_relayed: {
      order_special_instructions: true;
      promotions: true;
    },
  ) {
    this.reason = reason;
    this.external_reference_id = external_reference_id;
    this.fields_relayed = fields_relayed;
  }
}

export class AcceptOrderResponse {}

export enum DenyReasonCode {
  STORE_CLOSED = 'STORE_CLOSED',
  POS_NOT_READY = 'POS_NOT_READY',
  POS_OFFLINE = 'POS_OFFLINE',
  ITEM_AVAILABILITY = 'ITEM_AVAILABILITY',
  MISSING_ITEM = 'MISSING_ITEM',
  MISSING_INFO = 'MISSING_INFO',
  PRICING = 'PRICING',
  CAPACITY = 'CAPACITY',
  ADDRESS = 'ADDRESS',
  SPECIAL_INSTRUCTIONS = 'SPECIAL_INSTRUCTIONS',
  OTHER = 'OTHER',
}

export class DenyOrder {
  public reason: {
    explanation: string;
    code: DenyReasonCode;
    out_of_stock_items: string[];
    invalid_items: string[];
  };

  constructor(reason: {
    explanation: string;
    code: DenyReasonCode;
    out_of_stock_items: string[];
    invalid_items: string[];
  }) {
    this.reason = reason;
  }
}

export class DenyOrderResponse {}

export class CancelOrder {}

export class CancelOrderResponse {}

export class PatchCart {
  public fulfillment_issues: {
    fulfillment_issue_type: 'OUT_OF_ITEM' | 'PARTIAL_AVAILABILITY';
    fulfillment_action_type: 'REMOVE_ITEM' | 'REPLACE_FOR_ME';
    root_item: {
      instance_id: string;
    };
    item_substitute: {
      id: string;
      quantity: number;
      selected_modifier_groups: {
        selected_items: {
          id: string;
          quantity: number;
        };
      };
    };
    item_availability_info: {
      items_available: number;
    };
  }[];

  constructor(
    fulfillment_issues: {
      fulfillment_issue_type: 'OUT_OF_ITEM' | 'PARTIAL_AVAILABILITY';
      fulfillment_action_type: 'REMOVE_ITEM' | 'REPLACE_FOR_ME';
      root_item: { instance_id: string };
      item_substitute: {
        id: string;
        quantity: number;
        selected_modifier_groups: { selected_items: { id: string; quantity: number } };
      };
      item_availability_info: { items_available: number };
    }[],
  ) {
    this.fulfillment_issues = fulfillment_issues;
  }
}

export class PatchCartResponse {}

export class UpdateDeliveryStatus {
  public order_id: string;
  public status: 'started' | 'arriving' | 'delivered';

  constructor(orderId: string, status: 'started' | 'arriving' | 'delivered') {
    this.order_id = orderId;
    this.status = status;
  }
}

export class UpdateDeliveryStatusResponse {}
