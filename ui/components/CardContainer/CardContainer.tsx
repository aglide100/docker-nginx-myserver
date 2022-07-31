import React from "react";
import { CodeServer } from "../CardItem/CodeServer";
import { Dynmap } from "../CardItem/Dynmap";
import { Jdownloader2 } from "../CardItem/Jdownloader2";
import { Jellyfin } from "../CardItem/Jellyfin";
import { Netdata } from "../CardItem/Netdata";
import { Nextcloud } from "../CardItem/Nextcloud";
import { None } from "../CardItem/None";
import { Photoprism } from "../CardItem/Photoprism";
import { Transimission } from "../CardItem/Transimission";

export type CardContainerDataType = typeof servicesList[number];

export type CardContainerProps = {
    svcName: CardContainerDataType,
    domain: string,
}

export const servicesList = [ 
    "Jdownloader2",
    "Netdata",
    "Photoprism",
    "Transmission",
    "Codeserver",
    "Jellyfin",
    "Jellyfin2",
    "Jenkins",
    "Nextcloud",
    "Tomcat",
    "CasaOS",
    "Minecraft",
    "Dynmap",
] as const; 

const cardData = {
    Jdownloader2:  React.createFactory(Jdownloader2),
    Netdata:  React.createFactory(Netdata),
    Photoprism:  React.createFactory(Photoprism),
    Transmission:  React.createFactory(Transimission),
    Codeserver:  React.createFactory(CodeServer),
    Jellyfin:  React.createFactory(Jellyfin),
    Jellyfin2:  React.createFactory(None),
    Jenkins:  React.createFactory(None),
    Nextcloud:  React.createFactory(Nextcloud),
    Tomcat:  React.createFactory(None),
    CasaOS:  React.createFactory(None),
    Minecraft:  React.createFactory(None),
    Dynmap:  React.createFactory(Dynmap),
}

export const CardContainer = (props: CardContainerProps) => {
    return cardData[props.svcName](props.domain)
};
  