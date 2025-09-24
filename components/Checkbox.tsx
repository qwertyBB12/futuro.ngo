import * as React from "react";
import {
  PlasmicCheckbox,
  DefaultCheckboxProps
} from "./plasmic/futuro_ngo/PlasmicCheckbox";

export type CheckboxProps = DefaultCheckboxProps;

function Checkbox(props: CheckboxProps) {
  return <PlasmicCheckbox {...props} />;
}

export default Checkbox;
