export interface sumbitApplication {
    DSAOrReferral: string
    MobileNo: string
    EmailID: string
    PANNumber: string
    CKYCNo: string
    aadharNo: string
    addresses: Address[]
    salutation: string
    name: string
    photo: string
    DOB: string
    fatherName: string
    gender: string
    accountHolderName: string
    typeOfAccoont: string
    bankAccountNo: string
    IFSCCode: string
    bankName: string
    branchName: string
    bankphoneNo: string
    reference: Reference[]
    relationships: Relationship[]
    ApplicantDetails: ApplicantDetail[]
    documents: Document[]
    CIBIL: Cibil
    dateOfIncorporation: string
    partnerType: string
    constitutionType: string
    GSTApplicableSection: string
    GSTNumber: string
    MSMERegistrationApplicable: string
    MSMENo: string
    TRINNoApplicable: string
    TRINNo: string
    legalDispute: string
    legalDescription: string
    DSANumber: string
    DMSReferenceNumber: string
    RMCode: string
    ZMCode: string
  }
  
  export interface Address {
    addressType: string
    addressL1: string
    addressL2: string
    landmark: string
    pincode: string
    area: string
    postOffice: string
    city: string
    district: string
    state: string
    country: string
    residenceType: string
  }
  
  export interface Reference {
    name: string
    mobileNo: string
    companyEmail: string
  }
  
  export interface Relationship {
    companyName: string
    relation: string
    location: string
    date: string
    place: string
  }
  
  export interface ApplicantDetail {
    applicantType: string
    salutation: string
    FullName: string
    Position: string
    Since: string
    mobileNo: string
    panNo: string
    adhaarNo: string
  }
  
  export interface Document {
    type: string
    document: string
  }
  
  export interface Cibil {
    timestamp: string
    score: number
  }
  

  export interface addressType {
    addressType: string
    addressL1: string
    addressL2: string
    landmark: string
    pincode: string
    area: string
    postOffice: string
    city: string
    district: string
    state: string
    country: string
    residenceType: string
  }

  export interface referenceType {
    name: string
    mobileNo: string
    companyEmail: string
    
  }

  export interface  RelationshipType{
    companyName: string
    relation: string
    location: string
    date: string
    place: string
  }

  export interface SuccessResponse {
    status: string
    data: Data
  }
  
  export interface Data {
    status: string
    message: string
    Status: number
    "Application No": string
  }