## 序言
> 由于这些简单的脚本在多年前完成、目前上传到github,为做个备份、也为  
> 怀念以前一段工作时光.  
### 定时采集数据到mongodb  　　
#### 部署

> * git clone https://github.com/flyhigh318/save_data_mongodb.git  
> * 部署　mongodb 服务并开启27017端口,创建数据库monitorperhour  
> * linux 服务器安装rsync工具定时同步采集log信息到固定文件夹/tmp/testdata
> * 部署crontab 定时任务,相关脚本为saveDataTo139.bash,就可以入库了  
>
> 部署nodejs  
>> 安装nodejs相关的依赖　　
>> ```
>>    npm install bluebird  
>>    npm install moment  
>>    npm install mongoose  
>> ```
