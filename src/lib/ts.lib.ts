import { $ } from "./utils/utils";
import "./style.scss";

export type TGridTarget = string | HTMLElement;

/**
 * @param  {TGridTarget|null} target
 * @param  {{data:any}={data:[]}} options
 */
class TsLib {
  readonly $target: HTMLElement;
  readonly data: any = [];
  constructor(
    target: TGridTarget | null,
    options: { data: any } = { data: [] }
  ) {
    this.$target = $(target as TGridTarget);
    this.data = options.data;
  }
}

export default TsLib;
