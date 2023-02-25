import React from "react";
import { CardContainerProps } from "../CardContainer/CardContainer";
import { CardItemTemplate } from "../CardItemTemplate/CardItemTemplate";

export const Nextcloud = (props: CardContainerProps) => {
  const innerContent = <>Own nas service</>;
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
        displayedName={"Nextcloud"}
        svcUrl={"nextcloud." + baseUrl}
        logoUrl={"icon_nextcloud.png"}
        child={innerContent}
      ></CardItemTemplate>
    </>
  );
};
