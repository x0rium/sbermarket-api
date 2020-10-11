/**
 * Location: информация о расположении магазина
 */
export interface Location {
  /**
   * id: уникальный id локации
   */
  id: number;
  /**
   * full_address: полный адрес
   */
  full_address: string;
  /**
   * city: город
   */
  city: string;
  /**
   * street: название улицы
   */
  street: string;
  /**
   * building: номер строения/дома
   */
  building: string;
  /**
   * lat: широта
   */
  lat: number;
  /**
   * lon: долгота
   */
  lon: number;
}
