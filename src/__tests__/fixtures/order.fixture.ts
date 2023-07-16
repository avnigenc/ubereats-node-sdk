import { faker } from '@faker-js/faker';

import { Eater, GetOrderDetailsResponse, OrderState, Payment } from '../../model/order/order.model';

const uuid = faker.string.uuid();
const externalReferenceId = faker.string.uuid();
const phone = faker.phone.number();
const placedAt = faker.date.recent().toISOString();

const price = () => {
  return {
    amount: faker.number.int({ min: 100, max: 1000 }),
    currency_code: 'EUR',
    formatted_amount: `€${faker.number.int({ min: 1, max: 10 })}.00`,
  };
};

const cartItem = {
  id: `product_${faker.string.uuid()}`,
  title: faker.commerce.productName(),
  external_data: faker.string.uuid(),
  quantity: faker.number.int({ min: 1, max: 10 }),
  price: {
    unit_price: price(),
    total_price: price(),
    base_unit_price: price(),
    base_total_price: price(),
  },
  instance_id: faker.string.uuid(),
  eater_id: faker.string.uuid(),
};

const payment: Payment = {
  charges: {
    total: price(),
    sub_total: price(),
    total_fee: price(),
    tax: price(),
    cash_amount_due: price(),
  },
  accounting: {
    taxRemittance: {
      tax: {
        uber: [
          {
            value: {
              amount: 1,
              currencyCode: 'string',
              formattedAmount: 'string',
            },
          },
        ],
        restaurant: faker.string.uuid(),
        courier: faker.string.uuid(),
        eater: faker.string.uuid(),
      },
      totalFeeTax: faker.string.uuid(),
      deliveryFeeTax: faker.string.uuid(),
      smallOrderFeeTax: faker.string.uuid(),
    },
  },
};

const eater: Eater = {
  first_name: faker.person.firstName(),
  phone: phone,
  phone_code: faker.location.countryCode(),
};

export const MockGetOrderDetailsResponse: GetOrderDetailsResponse = {
  id: uuid,
  display_id: uuid.substring(24).toUpperCase(),
  external_reference_id: externalReferenceId,
  current_state: faker.helpers.enumValue(OrderState),
  store: {
    id: faker.string.uuid(),
    name: faker.company.name(),
    external_reference_id: faker.string.uuid(),
    merchant_store_id: faker.string.uuid(),
    integrator_store_id: faker.string.uuid(),
    integrator_brand_id: faker.string.uuid(),
  },
  eater: eater,
  cart: {
    items: [cartItem],
    fulfillment_issues: [],
  },
  payment: payment,
  placed_at: placedAt,
  type: 'DELIVERY_BY_RESTAURANT',
  estimated_ready_for_pickup_at: '',
  eaters: [
    {
      id: faker.string.uuid(),
      first_name: faker.person.firstName(),
    },
  ],
  brand: 'UBER_EATS',
  deliveries: [],
  order_manager_client_id: faker.string.uuid(),
};
