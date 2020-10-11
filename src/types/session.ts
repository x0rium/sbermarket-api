export interface Session {
  /**
   * access_token: токен для запросов
   */
  access_token: string;
  /**
   * expires_at: временная метка, когда  протухает токен
   */
  expires_at: string;
  /**
   * is_valid: метка актуальности текущего токена
   */
  is_valid: boolean;
}
