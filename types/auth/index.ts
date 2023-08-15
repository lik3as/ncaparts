export interface metaJWT {
  iat: number;
  exp: number;
}

export interface payloadUser {
  username: string;
  email: string;
  passwd: string;
}