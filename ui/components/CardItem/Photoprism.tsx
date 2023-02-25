import React from "react";
import { CardContainerProps } from "../CardContainer/CardContainer";
import { CardItemTemplate } from "../CardItemTemplate/CardItemTemplate";

export const Photoprism = (props: CardContainerProps) => {
  const innerContent = <>Photo gallery with Tenserflow</>;

  return (
    <>
      <CardItemTemplate
        isClick={props.isClick}
        displayedName={"Photoprism"}
        svcUrl={"/photoprism"}
        logoUrl={"/icon_photoprism.svg"}
        child={innerContent}
      ></CardItemTemplate>
    </>
  );
};
