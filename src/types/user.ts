export interface User {
  id: string;
  email: string;
  display_email: string;
  first_name: string;
  last_name: string;
  has_confirmed_phone: boolean | null;
  privacy_terms: boolean | null;
  promo_terms_accepted: boolean | null;
  promo_terms_changed_at: string;
  current_phone: boolean | null;
  config: {
    send_emails: boolean | null;
    send_sms: boolean | null;
    send_push: boolean | null;
    default_bonus_card_id: boolean | null;
  };
}
