export interface Root {
    GetCustomerAssetsRequest: GetCustomerAssetsRequest
  }
  
  export interface GetCustomerAssetsRequest {
    SiteName: string
    AccountName: string
    AccountCode: string
    ClientKey: string
    RequestKey: string
    PartnerCustomerId: string
    LegalCopyStatus: string
  }
  