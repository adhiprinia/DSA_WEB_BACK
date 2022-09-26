export interface EzfloApplicationStatus {
    status: string
    data: Data
  }
  
  export interface Data {
    Status: number
    ApplicationData: ApplicationDaum[]
    message: string
  }
  
  export interface ApplicationDaum {
    ApplicationID: number
    ApplicationStatus: string
    Percentage: number
    SignedApplicationFormDMSID: string
    SignedAgreementDMSID: string
    ExternalQueryOpen: number
    ExternalQueryInProgress: number
    ExternalQueryResolved: number
    InternalQueryOpen: number
    InternalQueryInProgress: number
    InternalQueryResolved: number
  }