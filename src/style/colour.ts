import { Props } from "./types";
import { Theme } from "../styled";
import { readableColor, darken } from "polished";

export const colour = (key: keyof Theme["colours"]) => (props: Props) =>
  props.theme.colours[key];

export const darker = (key: keyof Theme["colours"], amount: number) => (
  props: Props
) => darken(amount, props.theme.colours[key]);

export const textColour = (background: keyof Theme["colours"]) => (
  props: Props
) => readableColor(props.theme.colours[background]);
