export class LoginReq {
  userName: string;
  password: string;
}

export class SignUpReq {
  email: string;
}

export class SignUpRes {
  confirm: boolean;
}

export class VerifyOTPReq {
  otp: number;
  userName: string;
}

export class VerifyOTPRes {
  confirm: boolean;
  userName: string;
  access_token: string;
}

export class EmailProperties {
  emailFrom: string;
  emailSubject: string;
  emailTo: string;
  emailHTMLContent: string;
}
