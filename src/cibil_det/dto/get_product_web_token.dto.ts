export interface Root {
    GetProductWebTokenRequest: GetProductWebTokenRequest
  }
  
  export interface GetProductWebTokenRequest {
    SiteName: string
    AccountName: string
    AccountCode: string
    ClientKey: string
    RequestKey: string
    PartnerCustomerId: string
  }
  