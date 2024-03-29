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
	"Jenkins"
	"Nextcloud"
	"Tomcat"
	"Novnc"
	"CasaOS"
	"Minecraft"
	"Dynmap"
	"Bluemap"
	"NextJS"
	"EmulatorJS"
)

function in_array() {
    local needle array value
    needle="${1}"; shift; array=("${@}")
    for value in ${array[@]}; do [ "${value}" == "${needle}" ] && echo "true" && return; done
    echo "false"
}

function makeEnvFile() {
	envsubst < /etc/nginx/template/env/env.template > /usr/share/nginx/html/env.html
}

function makeBaseConf() {
	Check=${SSL:-false}

	if [[ ${Check} == "true" ]]; then
	    echo "SSL is true"
		envsubst '${Domain2} ${Domain1}' < /etc/nginx/template/ssl.conf.template > /etc/nginx/sites-available/ssl.conf
	else
	    echo "SSL is false"
		envsubst '${Domain2} ${Domain1}' < /etc/nginx/template/base.conf.template > /etc/nginx/sites-available/base.conf
	fi

}

#function giveEnvAtCommonFile() {
#	envsubst '${Domain2} ${Domain1}' < /etc/nginx/template/base.conf.template > /etc/nginx/sites-available/base.conf
#	#envsubst '${Domain2} ${Domain1}' < /etc/nginx/template/index.html.template > /usr/share/nginx/html/index.html
#}

function combinedBaseConf() {
	if [[ -v DOMAIN2 && -n ${DOMAIN2} ]]; then
	    echo $DOMAIN2

	else 
	    DOMAIN2="None"
	fi

}

function genSubCodeServerConf() {
	path="/etc/nginx/template/subcode"

	for entry in "${path}"/*
	do
		echo ${entry}

		fileName=${entry#${path}}

		# echo "${fileName%.template}"
		
		if [[ ${fileName%.template} != "/*" ]]; then
			echo "successfully added subcode conf file : ${fileName}"
			envsubst '${Domain2} ${Domain1}' < ${entry} > /etc/nginx/sites-available${fileName%.template}
		fi

	done
}

function makeLinkedFileAtLocations() {
	path="/etc/nginx/template/locations"

	for entry in "${path}"/*
	do
		fileName=${entry#${path}}

		if [[ ${fileName} != "/*" ]] && [[ ${fileName##*.} == "conf" ]]; then
			echo "successfully added locations file : ${fileName}"
			ln -sf ${entry} /etc/nginx/sites-enabled/locations${fileName}
		else 
			echo "refused : ${fileName} ${fileName##*.}"
		fi

		# if [[ ${${fileName}##*.} == ".conf" ]]; then
		# fi

	done
}

function makeLinkedFile() {
	path="/etc/nginx/sites-available"

	for entry in "${path}"/*
	do
		fileName=${entry#${path}}
		# echo "makeLinked file ${fileName}"

		if [[ ${fileName} != "/*" ]] && [[ ${fileName##*.} == "conf" ]]; then
			echo "successfully added file : ${fileName}"
			ln -sf ${entry} /etc/nginx/sites-enabled${fileName}
		else 
			echo "refused : ${fileName} ${fileName##*.}"
		fi
	done
}

function checkService() {
	for ((i=0; i<${#servicesNames[@]}; i++)) 
	do	
		Check="${!servicesNames[$i]:-false}"

		# echo " ${Check}"

		if [[ ${Check} == "true" ]]; then 
			echo "${servicesNames[$i]} used"
			#  pass

			if [ "${servicesNames[$i]}" == 'CasaOS' ] || [ "${servicesNames[$i]}" == 'Dynmap' ] || [ "${servicesNames[$i]}" == 'Bluemap' || [ "${servicesNames[$i]}" == 'NextJS' ] ; then
				echo "${servicesNames[$i]} Passed"
				continue
			fi

			ping -c 2 ${servicesNames[$i]} | head -n 3
			if [ "$?" = 0 ]
			then
				echo "${servicesNames[$i]} found..."
			else
				echo "Host not found..."
				rm -f /etc/nginx/template/locations/${servicesNames[$i]}.conf 
				rm -f /etc/nginx/template/subcode/${servicesNames[$i]}.conf.template 
				rm -f /etc/nginx/template/upstreams/${servicesNames[$i]}.conf 
			fi
		else 
			
			export ${servicesNames[$i]}=false
			

			echo "${servicesNames[$i]} removed"
			rm -f /etc/nginx/template/locations/${servicesNames[$i]}.conf 
			rm -f /etc/nginx/template/subcode/${servicesNames[$i]}.conf.template 
			rm -f /etc/nginx/template/upstreams/${servicesNames[$i]}.conf 
		fi
	done
}

addConfFile() {
	for ((i=0; i<${#servicesNames[@]}; i++)) 
	do 
		echo `$`${servicesNames[$i]}``
	done
}

checkService
genSubCodeServerConf
makeBaseConf
makeEnvFile
makeLinkedFile
makeLinkedFileAtLocations

# Check="/etc/letsencrypt/live/$Domain1/fullchain.pem"

# if [ -e $Check ]; then
# 	rm -rf /etc/nginx/sites-available/cert.conf
# 	ln -sf /etc/nginx/sites-available/proxy.conf /etc/nginx/sites-enabled/proxy.conf
# 	echo cert.conf_removed.
# else
# 	rm -rf /etc/nginx/sites-available/proxy.conf
# 	ln -sf /etc/nginx/sites-available/cert.conf /etc/nginx/sites-enabled/cert.conf
# 	echo proxy.conf_removed.
# fi

if [[ -n "$USERNAME" ]] && [[ -n "$USERPWD" ]]
then
	if [[ -n "$USERNAME2" ]] && [[ -n "$USERPWD2" ]]
	then
		htpasswd -bc /etc/nginx/user.htpasswd  $USERNAME $USERPWD
		htpasswd -b /etc/nginx/user.htpasswd $USERNAME2 $USERPWD2
		echo Done.
	else 
		htpasswd -bc /etc/nginx/user.htpasswd  $USERNAME $USERPWD
		echo Done.
	fi
else
    echo no auth file
fi

exec "$@"
