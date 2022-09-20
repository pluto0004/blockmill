interface ImportMetaEnv {
  readonly VITE_ALCHEMY_KEY: string;
  readonly VITE_MEASUREMENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
