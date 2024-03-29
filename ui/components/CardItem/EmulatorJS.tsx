import React from "react";
import { CardContainerProps } from "../CardContainer/CardContainer";
import { CardItemTemplate } from "../CardItemTemplate/CardItemTemplate";

export const EmulatorJS = (props: CardContainerProps) => {
  const innerContent = <>emulatorjs</>;
  let baseUrl = "";

  for (var p in props.domain) {
    if (Object.prototype.hasOwnProperty.call(props.domain, p)) {
      baseUrl += props.domain[p];
    }
  }
  return (
    <>
      <CardItemTemplate
        isClick={props.isClick}
        displayedName={"emulatorjs"}
        svcUrl={"https://emulatorjs." + baseUrl}
        logoUrl={"icon_emulatorjs.png"}
        child={innerContent}
      ></CardItemTemplate>
    </>
  );
};
