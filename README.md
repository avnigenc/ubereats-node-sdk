# UberEats SDK for Node.js

![UberEats SDK](https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg)

The UberEats SDK for Node.js is a powerful tool that allows developers to integrate UberEats functionality into their Node.js applications. With this SDK, you can easily access and interact with the UberEats API, enabling you to build innovative food delivery solutions and enhance your customer's experience.

## Features

- **Easy Integration:** Seamlessly integrate the UberEats API into your Node.js applications with a few lines of code.
- **Orders API**: Easily manage the ordering process with the Orders API. This API allows you to place orders, retrieve order details, and handle order cancellations.
- **Stores API**: Access essential store information, including menus, location details, ratings, and more. Utilize the Stores API to offer users a seamless browsing experience.
- **Authentication API**: Implement secure user authentication with the Authentication API. Safeguard user data and ensure a smooth, personalized experience for your users.


## Installation

To install the UberEats SDK for Node.js, use npm:

```bash
npm install ubereats-sdk
```

## Getting Started
To get started with the UberEats SDK, you'll need to sign up for an UberEats API account and obtain the required credentials. Please follow the steps below:

- Visit the Uber Developer Dashboard and sign in with your Uber account or create a new one if you don't have it.
- Create a new UberEats API application from the dashboard.
- Obtain your CLIENT_ID and CLIENT_SECRET from the newly created application.

## Usage
Once you have obtained your API credentials, you can start using the UberEats SDK in your Node.js application:

```typescript
import {
  AuthenticationClient,
  Authentication,
  GrantType,
  Scope,
  OrderClient,
} from 'ubereats-sdk';

const authentication = new Authentication(
  'CLIENT_SECRET',
  'CLIENT_ID',
  GrantType.ClientCredentials,
  [Scope.Order],
);

const clientClient = new AuthenticationClient();
const response = await clientClient.authenticate(authentication);

const orderClient = new OrderClient(response.access_token);
const order = await orderClient.getOrder('orderId');
```

## Support
For bug reports, feature requests, or any other questions, feel free to contact me.

## Contributing
We welcome contributions to enhance the UberEats SDK. If you find any issues or want to add new features, please open an issue or submit a pull request on our GitHub repository.

## License
The UberEats SDK for Node.js is licensed under the MIT License.
