#!/bin/bash
set -eu
# receive env form outside

servicesNames=(
	"Jdownloader2"
	"Netdata"
	"Photoprism"
	"Transmission"
	"Codeserver"
	"Jellyfin"
	"Jellyfin2"
	"Jenkins"
	"Nextcloud"
	"Tomcat"
	"Novnc"
	"CasaOS"
	"Minecraft"
	"Dynmap"
)

function in_array() {
    local needle array value
    needle="${1}"; shift; array=("${@}")
    for value in ${array[@]}; do [ "${value}" == "${needle}" ] && echo "true" && return; done
    echo "false"
}

function giveEnvAtCommonFile() {
	#envsubst < /app/ui/next.config.js.template > /app/ui/next.config.js
	envsubst < /app/next.config.js.template > /app/next.config.js
}

giveEnvAtCommonFile

exec "$@"
