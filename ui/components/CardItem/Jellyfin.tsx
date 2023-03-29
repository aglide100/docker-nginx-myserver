import React from "react";
import { CardContainerProps } from "../CardContainer/CardContainer";
import { CardItemTemplate } from "../CardItemTemplate/CardItemTemplate";

export const Jellyfin = (props: CardContainerProps) => {
  const innerContent = <>media player</>;
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
        displayedName={"Jellyfin"}
        svcUrl={"https://jellyfin." + baseUrl}
        logoUrl={"icon_jellyfin.png"}
        child={innerContent}
      ></CardItemTemplate>
    </>
  );
};
