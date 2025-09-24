import * as React from "react";
import {
  PlasmicCheckboxGroup,
  DefaultCheckboxGroupProps
} from "./plasmic/futuro_ngo/PlasmicCheckboxGroup";

export type CheckboxGroupProps = DefaultCheckboxGroupProps;

function CheckboxGroup(props: CheckboxGroupProps) {
  return <PlasmicCheckboxGroup {...props} />;
}

export default CheckboxGroup;
