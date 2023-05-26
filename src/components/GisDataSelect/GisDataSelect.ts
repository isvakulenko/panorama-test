import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component
export default class GisDataSelect extends Vue {
  /**
   * Содержимое поля select, выбор feature
   * @property selectedFeature
   */
  selectedFeature: unknown = null;

  /**
   * Массив с features
   * @public
   * @readonly
   * @property features
   */

  @Prop({ default: () => [] })
  public readonly features!: [];
}
