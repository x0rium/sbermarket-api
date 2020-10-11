/**
 * NextDelivery: информация о следующей доставке
 */
export type NextDelivery = {
  /**
   * id: уникальный id предложения о доставке
   */
  id: number;
  /**
   * price: цена доставки в рублях
   */
  price: number;
  /**
   * summary: общая информация о доставке
   */
  summary: string;
  /**
   * starts_at: время начала доставки
   */
  starts_at: string;
  /**
   * ends_at: время окончания доставки
   */
  ends_at: string;
};
