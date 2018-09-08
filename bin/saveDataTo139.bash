#!/bin/bash
# author: Abner.W
# function: it can push 10.172.182.35 monitorperhour data to mongodb from one hour.


function exportPath() {

	PATH=/usr/local/node/node-v4.6.0-linux-x64/bin:/usr/local/nginx/sbin:/usr/lib64/qt-3.3/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin
	export PATH
}


function trapSignal() {

	trap " " 1 2 15

}


function rsync_data_to_local() {

	remote_path=/usr/local/yunwei/qqm/monitorBusiness/log/
	remote_ip=10.173.45.201
	remote_user=root
	local_path=/tmp/testdata/

	rsync -avzP  $remote_user@$remote_ip:$remote_path $local_path
	remote_file_num=`ssh $remote_user@$remote_ip "ls $remote_path | wc -l"`
	local_file_num=`ls $local_path | wc -l`
	if [ $remote_file_num -eq $local_file_num ]; then

		echo "`date +'%F %H:%M:%S'` get $remote_ip $remote_path well." >> /tmp/savaData.log
	else
		echo "`date +'%F %H:%M:%S'` get $remote_ip $remote_path failed." >> /tmp/savaData.log

	fi
}


function exctute_module_save_data() {

	target_path=/usr/local/yunwei/mongodb/db_139
	target_path_js=$target_path/main_inert_data_mongoSql.js
	node $target_path_js &
	sleep 60
	ps -ef | grep -i "$target_path_js" | grep -v grep | awk '{print $2}' | xargs kill -9
	echo "`date +'%F %H:%M:%S'` sava data to mongodb well." >> /tmp/savaData.log

}

function main() {

	exportPath
	trapSignal
	rsync_data_to_local
	exctute_module_save_data
}

main
