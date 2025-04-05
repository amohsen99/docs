https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html


steps 
1- 

$ curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

2-check 
which aws 
aws --version

#!bin/bash
yum update -y
yum install httpd -y # installs apache (h4pd) service
systemctl start httpd # starts h4pd service
systemctl enable httpd # enable h4pd to auto-start at system boot
echo " This is server *1* in AWS Region US-EAST-1 in AZ US-EAST-1A " > /var/www/html/index.html


#!/bin/bash
update-alternatives --config editor
sudo sed -i 's/^#PermitRootLogin prohibit-password$/PermitRootLogin yes/' /etc/ssh/sshd_config
sudo sed -i 's/^PasswordAuthentication no$/PasswordAuthentication yes/' /etc/ssh/sshd_config
sudo systemctl restart sshd.service