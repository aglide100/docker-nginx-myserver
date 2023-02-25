import React from "react";
import { CardItemTemplate } from "../CardItemTemplate/CardItemTemplate";
import { CardContainerProps } from "../CardContainer/CardContainer";

export const Bluemap = (props: CardContainerProps) => {
  const innerContent = <>3D map for Minecraft Server</>;

  return (
    <>
      <CardItemTemplate
        isClick={props.isClick}
        displayedName={"Bluemap"}
        svcUrl={"/bluemap"}
        logoUrl={"icon_bluemap.png"}
        child={innerContent}
      ></CardItemTemplate>
    </>
  );
};
