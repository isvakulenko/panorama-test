/* eslint-disable */
export default class Utils {
  /**
   * Вычисление площади
   * @static
   * @method calculateArea
   * @param bbox {number[]} Массив точек границ прямоугольника
   * @return {string} Значение площади в виде строки
   */
  static calculateArea(bbox: number[]): string {
    const height = bbox[3] - bbox[1];
    const width = bbox[2] - bbox[0];
    const area = width * height;
    return area.toFixed(2);
  }

  /**
   * Получение случайного числа от 7000 до 10000
   * @static
   * @method getRandomNumber
   * @return {number} Случайное число
   */
  static getRandomNumber(): number {
    const delay = Math.floor(Math.random() * (10000 - 7000)) + 7000;
    return delay;
  }

  /**
   * Остановка выполнения программы на заданное время
   * @static
   * @method getRandomDelay
   * @param delay {number} Время задержки
   * @return {Promise<null>} Промис выполнится строго через заданное время
   */
  static getRandomDelay(delay: number): Promise<null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, delay);
    });
  }

  /**
   * Запрос данных с сервера
   * @static
   * @method getDataApi
   * @param url {string} Адрес запроса URL
   * @return {Promise<unknown>}
   */
  static getDataApi = async (url: string): Promise<unknown> => {
    const res = await fetch(`${url}`);
    return await Utils.checkResponse(res);
  };

  /**
   * Проверка ответа от сервера
   * @static
   * @method checkResponse
   * @param res {Responce} Ответ от сервера
   * @returns {Promise<T>} Объект с сервера
   */
  static checkResponse = <T>(res: Response): Promise<T> => {
    return res.ok
      ? res.json()
      : res.json().then((err) => Promise.reject(`Ошибка: ${err.status}`));
  };
}
