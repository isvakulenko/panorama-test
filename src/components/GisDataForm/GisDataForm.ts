import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator';

@Component
export default class GisDataForm extends Vue {
  /**
   * Идентификационный номер территории
   * @property id
   */
  id: string = '';

  /**
   * Название слоя
   * @property layer
   */
  layer: string = '';

  /**
   * Имя feature
   * @property name
   */
  name: string = '';

  /**
   * Флаг, указывающий были ли изменения в полях данных
   * @property isChanged
   */
  isChanged: boolean = false;

  /**
   * Массив данных по объекту
   * @property semantics
   */
  semantics: [] = [];

  /**
   * Создает объект с данными для формы
   * @private
   * @method FormData
   *
   */
  private formData() {
    this.name = this.feature.properties.name;
    this.layer = this.feature.properties.layer;
    this.id = this.feature.properties.id;
    this.semantics = this.feature.properties.semantics;
    this.isChanged = false;
  }

  /**
   * Хук, вызываемый после создания экземпляра класса
   *
   */
  created() {
    this.formData();
  }

  /**
   * Следим за изменениями в выпадающем меню select
   * @method onChange
   */
  @Watch('feature')
  onChange() {
    this.formData();
  }

  /**
   * Записываем внесенные изменения
   * @method saveData
   */
  @Emit('save')
  saveData() {
    this.isChanged = false;
  }

  /**
   * Выбор элемента массива feature
   * @public
   * @readonly
   * @property features
   */
  @Prop({ default: () => {} })
  public readonly feature!: any;

  /**
   * Вычисленное значение площади
   * @public
   * @readonly
   * @property area
   */
  @Prop(String)
  public readonly area!: string;
}
