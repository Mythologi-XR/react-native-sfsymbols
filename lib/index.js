"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.SFSymbol = exports.SFSymbolScale = exports.SFSymbolWeight = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
var SFSymbolWeight;
(function (SFSymbolWeight) {
  SFSymbolWeight["ULTRALIGHT"] = "ultralight";
  SFSymbolWeight["LIGHT"] = "light";
  SFSymbolWeight["THIN"] = "thin";
  SFSymbolWeight["REGULAR"] = "regular";
  SFSymbolWeight["MEDIUM"] = "medium";
  SFSymbolWeight["SEMIBOLD"] = "semibold";
  SFSymbolWeight["BOLD"] = "bold";
  SFSymbolWeight["HEAVY"] = "heavy";
})(SFSymbolWeight || (exports.SFSymbolWeight = SFSymbolWeight = {}));
var SFSymbolScale;
(function (SFSymbolScale) {
  SFSymbolScale["SMALL"] = "small";
  SFSymbolScale["MEDIUM"] = "medium";
  SFSymbolScale["LARGE"] = "large";
})(SFSymbolScale || (exports.SFSymbolScale = SFSymbolScale = {}));
const RNSFSymbol = (0, react_native_1.requireNativeComponent)("RNSfsymbols");
class SFSymbol extends react_1.PureComponent {
  render() {
    if (react_native_1.Platform.OS !== "ios") return null;
    const { name, color, resizeMode, ...props } = this.props;
    let fallback = null;
    const defaultResizeMode =
      !resizeMode && props.size ? "center" : "scale-aspect-fit";
    if (this.props.fallback) {
      const [major, minor] = react_native_1.Platform.Version.split(".").map(
        (c) => parseInt(c, 10)
      );
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
        iconColor={(0, react_native_1.processColor)(color)}
      />
    );
  }
}
exports.SFSymbol = SFSymbol;
