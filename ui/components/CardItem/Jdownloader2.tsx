import React from "react";
import { CardContainerProps } from "../CardContainer/CardContainer";
import { CardItemTemplate } from "../CardItemTemplate/CardItemTemplate";

export const Jdownloader2 = (props: CardContainerProps) => {
  const innerContent = <>Novnc with Jdownloader2</>;

  return (
    <>
      <CardItemTemplate
        isClick={props.isClick}
        displayedName={"Jdownloader2"}
        svcUrl={"/jdownloader-2"}
        logoUrl={"icon_jdownloader.svg"}
        child={innerContent}
      ></CardItemTemplate>
    </>
  );
};
