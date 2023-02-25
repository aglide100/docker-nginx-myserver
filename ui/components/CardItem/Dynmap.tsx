import React from "react";
import { CardContainerProps } from "../CardContainer/CardContainer";
import { CardItemTemplate } from "../CardItemTemplate/CardItemTemplate";

export const Dynmap = (props: CardContainerProps) => {
  const innerContent = <>Simple map for Minecraft Server</>;

  return (
    <>
      <CardItemTemplate
        isClick={props.isClick}
        displayedName={"Dynmap"}
        svcUrl={"/dynmap"}
        logoUrl={"icon_bluemap.png"}
        child={innerContent}
      ></CardItemTemplate>
    </>
  );
};
