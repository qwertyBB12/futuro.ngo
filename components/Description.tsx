import * as React from "react";
import {
  PlasmicDescription,
  DefaultDescriptionProps
} from "./plasmic/futuro_ngo/PlasmicDescription";

export type DescriptionProps = DefaultDescriptionProps;

function Description(props: DescriptionProps) {
  return <PlasmicDescription {...props} />;
}

export default Description;
