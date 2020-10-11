import { Zone } from "zone";
import { Retailer } from "retailer";
import { NextDelivery } from "nextDelivery";
import { OperationalTime } from "operationalTime";

export interface Store {
  /**
   * id: идентификатор магазина
   */
  id: number;
  /**
   * name: название магазина в системе
   */
  name: string;
  /**
   * zones: массив зон доставки
   */
  zones: [Zone[]];
  /**
   * uuid: UUID4 уникальный id сущности, скорее всего юзается в механизмах кэша
   */
  uuid: string;
  /**
   * express_delivery: возможна экспресс доставка
   */
  express_delivery: boolean;
  /**
   * min_order_amount: минимальная сумма заказа
   */
  min_order_amount: number;
  /**
   * min_first_order_amount: минимальная сумма первого заказа
   */
  min_first_order_amount: number;
  /**
   * min_order_amount_pickup: минимальная сумма за подборку заказа
   */
  min_order_amount_pickup: number;
  /**
   * min_first_order_amount_pickup: минимальная сумма за подборку первого заказа
   */
  min_first_order_amount_pickup: number;
  /**
   * available_for_pickup: доступна сборка заказа
   */
  available_for_pickup: boolean;
  /**
   * retailer: Retailer айдентика
   */
  retailer: Retailer;
  /**
   * location: местоположение магазина
   */
  location: Location;
  /**
   * next_delivery: Location Информация о будущей доставке
   */
  next_delivery: NextDelivery;
  /**
   * services - NextDelivery похоже что дополнительные услуги, но это не точно
   */
  services: unknown[];
  /**
   * operational_times:  информация о времени работы
   */
  operational_times: OperationalTime[];
}
