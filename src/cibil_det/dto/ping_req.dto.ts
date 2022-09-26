export interface Root {
    PingRequest: PingRequest
  }
  
  export interface PingRequest {
    SiteName: string
    AccountName: string
    AccountCode: string
    ClientKey: string
    RequestKey: string
  }
  