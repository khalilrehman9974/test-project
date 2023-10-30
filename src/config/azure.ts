import dotenv from 'dotenv';
dotenv.config();
export const azureConfig = {
  baseUrl: 'https://login.microsoftonline.com',
  tenant:
    process.env.PUREFAMILY_AZURE_AD_TENANT_NAME ||
    'purefamilyauthb2cdev.onmicrosoft.com',
  tokenEndpoint: 'oauth2/v2.0/token',
  grant_type: 'client_credentials',
  client_id:
    process.env.PUREFAMILY_AZURE_AD_CLIENT_ID ||
    'a440a6ba-dcf7-4b01-8ed8-60df4af5c33d',
  client_secret:
    process.env.PUREFAMILY_AZURE_AD_CLIENT_SECRET ||
    '2eI8Q~firYTCmVjsKKsN4r~6AoHlls51CcmLPbvb',
  scope: 'https://graph.microsoft.com/.default',
  b2cTokenEndpoint:
    process.env.PUREFAMILY_B2C_TOKEN_ENDPOINT ||
    'https://purefamilyauthb2cdev.b2clogin.com/purefamilyauthb2cdev.onmicrosoft.com/b2c_1_sign_in/oauth2/v2.0/token',
  // b2cClientId: process.env.B2C_FRONT_CLIENT_ID,
  //b2cScopes: 'openid+offline_access+8d6b460d-15c7-4121-a942-f3dafc3ff2e0',
};
