import React from "react";
import { Bluemap } from "../CardItem/Bluemap";
import { CodeServer } from "../CardItem/CodeServer";
import { Dynmap } from "../CardItem/Dynmap";
import { Jdownloader2 } from "../CardItem/Jdownloader2";
import { Jellyfin } from "../CardItem/Jellyfin";
import { Netdata } from "../CardItem/Netdata";
import { Nextcloud } from "../CardItem/Nextcloud";
import { None } from "../CardItem/None";
import { Photoprism } from "../CardItem/Photoprism";
import { Transmission } from "../CardItem/Transmission";

export type CardContainerDataType = typeof servicesList[number];

export type CardContainerProps = {
    svcName: CardContainerDataType;
    domain: string;
    // onHover: (e:any) => void;
};

export const servicesList = [
    "Jdownloader2",
    "Netdata",
    "Photoprism",
    "Transmission",
    "Codeserver",
    "Jellyfin",
    "Jenkins",
    "Nextcloud",
    "Tomcat",
    "CasaOS",
    "Minecraft",
    "Dynmap",
] as const;

const cardData = {
    Jdownloader2: React.createFactory(Jdownloader2),
    Netdata: React.createFactory(Netdata),
    Photoprism: React.createFactory(Photoprism),
    Transmission: React.createFactory(Transmission),
    Codeserver: React.createFactory(CodeServer),
    Jellyfin: React.createFactory(Jellyfin),
    Jenkins: React.createFactory(None),
    Nextcloud: React.createFactory(Nextcloud),
    Tomcat: React.createFactory(None),
    CasaOS: React.createFactory(None),
    Minecraft: React.createFactory(None),
    Dynmap: React.createFactory(Dynmap),
    Bluemap: React.createFactory(Bluemap),
};

export const CardContainer = (props: CardContainerProps) => {
    return cardData[props.svcName](props.domain);
};
