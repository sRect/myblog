FROM nginx:stable 
# 删除nginx 默认配置
RUN rm /etc/nginx/conf.d/default.conf
# 添加自己的配置 default.conf 在下面
ADD default.conf /etc/nginx/conf.d/
# 将当前目录下的所有文件（除了.dockerignore排除的路径），都拷贝进入/usr/share/nginx/build目录下。
COPY build /usr/share/nginx/build
# 指定接下来的工作路径为/usr/share/nginx/build
WORKDIR /usr/share/nginx/build
# RUN npm install
# 将容器 3000 端口暴露出来， 允许外部连接这个端口
EXPOSE 80
# CMD node index.js