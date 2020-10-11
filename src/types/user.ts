export interface User {
  /**
   * id - id юзера в системе
   */
  id: string;
  /**
   * email - адрес электронной почты
   */
  email: string;
  /**
   * display_email: отображаемый в интерфейсе адрес электронной почты
   */
  display_email: string;
  /**
   * first_name - имя
   */
  first_name: string;
  /**
   * last_name: фамилия
   */
  last_name: string;
  /**
   * has_confirmed_phone: флаг подтверждения верификации номера телефона
   */
  has_confirmed_phone: boolean | null;
  /**
   * privacy_terms: флаг, принял ли юзер правила о приватных данных
   */
  privacy_terms: boolean | null;
  /**
   * promo_terms_accepted: флаг, принял ли правила участия в каком то промо
   */
  promo_terms_accepted: boolean | null;
  /**
   * promo_terms_changed_at: дата время изменения правил
   */
  promo_terms_changed_at: string;
  /**
   * current_phone: текущи номер телефона
   */
  current_phone: string | null;
  config: {
    /**
     * send_emails: флаг, надо слать инфу на почтарь
     */
    send_emails: boolean | null;
    /**
     * send_sms: флаг, надо слать инфу через СМС
     */
    send_sms: boolean | null;
    /**
     * send_push: флаг, надо слать инфу через Push
     */
    send_push: boolean | null;
    /**
     * default_bonus_card_id: судя по всему номер какой то партнерской карты или кэшбэк карты
     */
    default_bonus_card_id: unknown;
  };
}
