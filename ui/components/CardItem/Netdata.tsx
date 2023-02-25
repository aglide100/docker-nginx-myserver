import React from "react";
import { CardContainerProps } from "../CardContainer/CardContainer";
import { CardItemTemplate } from "../CardItemTemplate/CardItemTemplate";

export const Netdata = (props: CardContainerProps) => {
  const innerContent = <>Monitoring</>;

  return (
    <>
      <CardItemTemplate
        isClick={props.isClick}
        displayedName={"Netdata"}
        svcUrl={"/netdata"}
        logoUrl={"/icon_monitoring.svg"}
        child={innerContent}
      ></CardItemTemplate>
    </>
  );
};
