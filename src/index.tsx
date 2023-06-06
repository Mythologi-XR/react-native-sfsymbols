import React, { PureComponent } from "react";
import {
  requireNativeComponent,
  processColor,
  StyleProp,
  ViewStyle,
  ProcessedColorValue,
  ColorValue,
  Platform,
} from "react-native";

import type { SymbolName } from "./names";
import type { SafeSymbolName } from "./safeNames";

export enum SFSymbolWeight {
  ULTRALIGHT = "ultralight",
  LIGHT = "light",
  THIN = "thin",
  REGULAR = "regular",
  MEDIUM = "medium",
  SEMIBOLD = "semibold",
  BOLD = "bold",
  HEAVY = "heavy",
}

export enum SFSymbolScale {
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

type NativeSFSymbolProps = Omit<SFSymbolProps, "color" | "name"> & {
  iconColor?: ProcessedColorValue | null;
  systemName: SymbolName;
};

const RNSFSymbol = requireNativeComponent<NativeSFSymbolProps>("RNSfsymbols");

export class SFSymbol extends PureComponent<SFSymbolProps> {
  render() {
    if (Platform.OS !== "ios") return null;

    const { name, color, resizeMode, ...props } = this.props;
    let fallback = null;
    const defaultResizeMode =
      !resizeMode && props.size ? "center" : "scale-aspect-fit";

    if (this.props.fallback) {
      const [major, minor] = (Platform.Version as string)
        .split(".")
        .map((c) => parseInt(c, 10));

      // this version's minimum where all icons are supported; 16.1
      if (major < 16) {
        fallback = this.props.fallback;
      } else if (minor < 1) {
        fallback = this.props.fallback;
      }
    }

    return (
      <RNSFSymbol
        {...props}
        resizeMode={resizeMode ?? defaultResizeMode}
        systemName={fallback ? fallback : name}
        iconColor={processColor(color)}
      />
    );
  }
}
