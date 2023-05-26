import { Component, Prop, Emit, Vue } from 'vue-property-decorator';
import GisDataForm from '../GisDataForm/GisDataForm.vue';
import GisDataSelect from '../GisDataSelect/GisDataSelect.vue';
import Utils from '@/utils/utils';
import { baseUrl } from '@/utils/const';

// const GISDataSelectProps = Vue.extend({
//   props: {
//     features: [],
//   },
// })

@Component({ components: { GisDataForm, GisDataSelect } })
export default class GisGetData extends Vue {
  /**
   * Флаг, указывающий началась ли загрузка
   * @property isChanged
   */
  isLoading: boolean = false;
  /**
   * Значение процента загрузки
   * @property progress
   */
  progress: number = 0;

  /**
   * Массив данных по объекту
   * @property features
   */
  features: [] = [];

  /**
   * Объект из массива данных features
   * @property selectedFeature
   */
  selectedFeature: unknown = null;

  /**
   * Значение площади
   * @property area
   */
  area: string = '';

  /**
   * Флаг, указывающий началось ли сохранение
   * @property isChanged
   */
  isSaving: boolean = false;

  /**
   * Флаг, указывающий закончилось ли сохранение
   * @property isChanged
   */
  isSaved: boolean = false;
  /**
   * Время начало записи файла
   * @property area
   */
  startTime: number = 0;
  /**
   * Время окончания записи файла
   * @property area
   */
  elapsedTime: number = 0;
  /**
   * Выбор feature из меню select
   * @method selectFeature
   * @param data
   */
  selectFeature(data: any) {
    this.selectedFeature = data;
  }

  /**
   * Загрузка данных с сервера
   * @method getGeoJSON
   * @param data
   */
  async getGeoJSON() {
    this.isLoading = true;
    this.progress = 0;
    //очистим форму
    this.selectedFeature = null;
    //для визуализации progress-linear
    // количество шагов
    const steps = 10;
    const delay = await Utils.getRandomNumber();
    // задержка на каждый шаг
    const stepDelay = delay / steps;
    for (let i = 0; i < steps; i++) {
      await Utils.getRandomDelay(stepDelay);
      // изменение значения progress на каждом шаге
      this.progress = (i + 1) * (100 / steps);
    }
    Utils.getDataApi(baseUrl).then((response: any) => {
      this.features = response.features;
      this.area = Utils.calculateArea(response.bbox);
      this.isLoading = false;
    });
  }

  /**
   * Загрузка данных с сервера
   * @method onSave
   * @param data
   */
  async onSave() {
    this.isSaving = true;
    this.startTime = Date.now();
    //сделаем задержку выполнения
    const delay = await Utils.getRandomNumber();
    await Utils.getRandomDelay(delay);
    this.isSaving = false;
    this.isSaved = true;
    this.elapsedTime = Date.now() - this.startTime;
  }
}
