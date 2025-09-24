import * as React from "react";
import {
  PlasmicLabel,
  DefaultLabelProps
} from "./plasmic/futuro_ngo/PlasmicLabel";

export type LabelProps = DefaultLabelProps;

function Label(props: LabelProps) {
  return <PlasmicLabel {...props} />;
}

export default Label;
