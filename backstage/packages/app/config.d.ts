export interface Config {
  i18n?: {
    /**
     * @visibility frontend
     */
    defaultLocale?: string;

    /**
     * @visibility frontend
     */
    availableLanguages?: string[];
  };
}
