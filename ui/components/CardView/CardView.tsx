import React from "react";
import { Jdownloader2 } from "../CardItem/Jdownloader2";
import { Netdata } from "../CardItem/Netdata";
import { Nextcloud } from "../CardItem/Nextcloud";
import { Photoprism } from "../CardItem/Photoprism";
import { Transimission } from "../CardItem/Transimission";
import styles from "../styles/Home.module.css";

export type CardViewDataType = typeof servicesList[number];

export type CardViewProps = {
    data: CardViewDataType,
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
    Codeserver:  React.createFactory(Jdownloader2),
    Jellyfin:  React.createFactory(Jdownloader2),
    Jellyfin2:  React.createFactory(Jdownloader2),
    Jenkins:  React.createFactory(Jdownloader2),
    Nextcloud:  React.createFactory(Nextcloud),
    Tomcat:  React.createFactory(Jdownloader2),
    CasaOS:  React.createFactory(Jdownloader2),
    Minecraft:  React.createFactory(Jdownloader2),
    Dynmap:  React.createFactory(Jdownloader2),
}

export const CardView = (props: CardViewProps) => {
    return cardData[props.data](props.domain);
  };
  