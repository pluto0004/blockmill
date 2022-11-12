interface ImportMetaEnv {
  readonly VITE_ALCHEMY_KEY_ETHEREUM: string;
  readonly VITE_ALCHEMY_KEY_POLYGON: string;
  readonly VITE_MEASUREMENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
