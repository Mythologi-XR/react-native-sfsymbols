import React, { PureComponent } from "react";
import { StyleProp, ViewStyle, ColorValue } from "react-native";
import type { SymbolName } from "./names";
import type { SafeSymbolName } from "./safeNames";
export declare enum SFSymbolWeight {
  ULTRALIGHT = "ultralight",
  LIGHT = "light",
  THIN = "thin",
  REGULAR = "regular",
  MEDIUM = "medium",
  SEMIBOLD = "semibold",
  BOLD = "bold",
  HEAVY = "heavy",
}
export declare enum SFSymbolScale {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}
export type SymbolWeight =
  | "ultralight"
  | "light"
  | "thin"
  | "regular"
  | "medium"
  | "semibold"
  | "bold"
  | "heavy";
export type SymbolScale = "small" | "medium" | "large";
export type SymbolResizeMode =
  | "scale-to-fill"
  | "scale-aspect-fit"
  | "scale-aspect-fill"
  | "redraw"
  | "center"
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "cover"
  | "contain"
  | "stretch";
export interface SFSymbolProps {
  name: SymbolName;
  color?: ColorValue;
  style?: StyleProp<ViewStyle>;
  size?: number;
  resizeMode?: SymbolResizeMode;
  weight?: SymbolWeight;
  scale?: SymbolScale;
  multicolor?: boolean;
  fallback?: SafeSymbolName;
}
export declare class SFSymbol extends PureComponent<SFSymbolProps> {
  render(): React.JSX.Element | null;
}
