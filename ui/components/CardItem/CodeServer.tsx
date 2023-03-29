import React from "react";
import { CardContainerProps } from "../CardContainer/CardContainer";
import { CardItemTemplate } from "../CardItemTemplate/CardItemTemplate";

export const CodeServer = (props: CardContainerProps) => {
  const innerContent = <>VSCode in browser</>;
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
        displayedName={"CodeServer"}
        svcUrl={"https://code." + baseUrl}
        logoUrl={"icon_vscode.svg"}
        child={innerContent}
      ></CardItemTemplate>
    </>
  );
};
