import { CSSProperties, Dispatch, SetStateAction } from "react";

/** Propsの型定義 */
interface PropsType {
  /** label タグと連携して Click 判定領域を拡張するための id */
  btnId: string;
  /** ボタンの表示 Text・ラベル */
  text: string;
  callBack: () => void;
  wrapperStyle?: CSSProperties;
  textStyle?: CSSProperties;
  btnStyle?: CSSProperties;
}

/**
 * Button
 * - SVG_Icon or img & Text(MSG) を表示する Btn
 */
const Button = (props: PropsType) => {
  const { btnId, text, callBack, wrapperStyle, btnStyle, textStyle } = props;

  /** Default の Btn Style */
  const defaultWrapperStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    width: "170px",
    height: "35px",
    backgroundColor: "#59B9C6",
    borderRadius: "8px",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
  } as CSSProperties;

  /** Default の Btn Style */
  const defaultBtnStyle = {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    outline: "none",
    padding: "0",
    appearance: "none",
  } as CSSProperties;

  /** Default の Text Style */
  const defaultTextStyle = {
    color: "white",
    fontWeight: "bold",
  } as CSSProperties;

  return (
    <label
      htmlFor={btnId}
      style={wrapperStyle ? wrapperStyle : defaultWrapperStyle}
      onClick={() => callBack()}
    >
      <button id={btnId} style={btnStyle ? btnStyle : defaultBtnStyle}>
        <span style={textStyle ? textStyle : defaultTextStyle}>{text}</span>
      </button>
    </label>
  );
};

export default Button;
