import React from "react";
import { CardContainerProps } from "../CardContainer/CardContainer";
import { CardItemTemplate } from "../CardItemTemplate/CardItemTemplate";

export const Transmission = (props: CardContainerProps) => {
  const innerContent = <>Transmission</>;

  return (
    <>
      <CardItemTemplate
        isClick={props.isClick}
        displayedName={"Transmission"}
        svcUrl={"/transmission"}
        logoUrl={"icon_transmission.png"}
        child={innerContent}
      ></CardItemTemplate>
    </>
  );
};
