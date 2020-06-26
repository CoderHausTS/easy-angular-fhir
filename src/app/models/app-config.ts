export interface AppConfig {
    env: {
        name: string;
        title: string;
    };
    fhir: {
      baseURL: string;
      clientId: string;
      redirectUrl: string;
    }
}

