export interface FullFillOfferRequestBody {
    FulfillOfferRequest: FulfillOfferRequest
}

export interface FulfillOfferRequest {
    ProductConfigurationId: string
    SiteName: string
    AccountName: string
    AccountCode: string
    ClientKey: string
    RequestKey: string
    PartnerCustomerId: string
    CustomerInfo: CustomerInfo
    LegalCopyStatus: string
    UserConsentForDataSharing: boolean
}

export interface CustomerInfo {
    Name: Name
    IdentificationNumber: IdentificationNumber
    Address: Address
    DateOfBirth: string
    PhoneNumber: PhoneNumber
    Email: string
    Gender: string
}

export interface Name {
    Forename: string
    Surname: string
}

export interface IdentificationNumber {
    IdentifierName: string
    Id: string
}

export interface Address {
    StreetAddress: string
    City: string
    PostalCode: number
    Region: number
    AddressType: number
}

export interface PhoneNumber {
    Number: number
}
