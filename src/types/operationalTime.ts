/**
 * OperationalTime: информация о времени работы
 */
export interface OperationalTime {
  /**
   * week_day: рабочие дни недели
   */
  week_day: string;
  /**
   * starts_at: время открытия
   */
  starts_at: string;
  /**
   * ends_at: время закрытия
   */
  ends_at: string;
}
