interface Window {
    apigClientFactory: {
      newClient: (config) => ApiClient;
    };
    fbAsyncInit: () => void;
    onLoadCallback: () => void;
  }
  
  declare var window: Window;
  