export class B2CUser {
  '@odata.context': string;
  id: string;
  businessPhones: string[];
  displayName: string;
  givenName: string;
  jobTitle: null | string;
  mail: null | string;
  mobilePhone: string;
  officeLocation: null | string;
  preferredLanguage: null | string;
  surname: string;
  userPrincipalName: string;
}

export class B2CUserToken {
  token_type: string;
  scope: string;
  resource?: string;
  expires_in: number;
  ext_expires_in: number;
  access_token: string;
  refresh_token: string;
  id_token: string;
}
