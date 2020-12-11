import { $ } from "./utils/utils";
import "./style.scss";

function tsLib(target: string | HTMLElement) {
  const gridTarget = $(target);
  return {
    target: gridTarget,
  };
}

export default tsLib;
