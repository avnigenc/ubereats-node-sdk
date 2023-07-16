import { faker } from '@faker-js/faker';
import { AuthenticationResponse, Scope } from '../../model/authentication/authenticaton.model';

export const MockAuthenticationResponse: AuthenticationResponse = {
  access_token: faker.string.alphanumeric(128),
  expires_in: new Date().getTime(),
  last_authenticated: new Date().getTime(),
  refresh_token: faker.string.alphanumeric(128),
  scope: faker.helpers.enumValue(Scope),
  token_type: 'Bearer',
};
