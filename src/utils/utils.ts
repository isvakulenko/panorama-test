export class Utils {
  //вычисление площади
  static calculateArea(bbox: number[]): string {
    const height = bbox[3] - bbox[1];
    const width = bbox[2] - bbox[0];
    const area = width * height;
    return area.toFixed(2);
  }

  //получение случайного значения задержки в интервале 7-10 секунд.
  static getRandomDelay(): Promise<null> {
    const delay = Math.floor(Math.random() * (10000 - 7000)) + 7000;
    console.log (delay)
    return  new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
        console.log (delay)
      }, delay);
    });
  }

  static checkResponse = <T>(res: Response): Promise<T> => {
    return res.ok
      ? res.json()
      : res.json().then((err) => Promise.reject(`Ошибка: ${err.status}`));
  };

  static getDataApi = (url:string) => {
    return fetch(`${url}`)
      .then((res) => Utils.checkResponse(res))

  };

}
