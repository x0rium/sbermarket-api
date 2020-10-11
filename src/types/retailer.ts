/**
 * Retailer: айдентика поставщика/ магазина
 */
export interface Retailer {
  /**
   * id: уникальный id ретейлера в системе
   */
  id: number;
  /**
   * name: название бренда
   */
  name: string;
  /**
   * slug: транслит от названия бренда
   */
  slug: string;
  /**
   * color: фирменный цвет
   */
  color: string;
  /**
   * logo_background_color: цвет подложки для лого
   */
  logo_background_color: string;
  /**
   * logo: ссылка на логотип
   */
  logo: string;
  /**
   * available: доступен ли этот ретейлер в системе
   */
  available: boolean;
  /**
   * environment: непонятная штука
   */
  retailer_agreement?: {
    id: number;
    agreement_type: string;
    url: string;
  };
  environment: null | unknown;
}
