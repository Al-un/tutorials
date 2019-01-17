interface ApiClient {
  rootGet: (params: any, body: any, additionalParams?: any) => Promise<any>;

  petsGet: (params: any, body: any, additionalParams?: any) => Promise<any>;

  petsPost: (params: any, body: any, additionalParams?: any) => Promise<any>;

  petsOptions: (params: any, body: any, additionalParams?: any) => Promise<any>;

  petsPetIdGet: (
    params: any,
    body: any,
    additionalParams?: any
  ) => Promise<any>;

  petsPetIdOptions: (
    params: any,
    body: any,
    additionalParams?: any
  ) => Promise<any>;
}
