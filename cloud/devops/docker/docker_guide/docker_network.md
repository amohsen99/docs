types of networks in docker:

1. bridge
2. overlay
3. host
4. none

bridge:
bridge network is the default network in docker
and it is used to connect containers to the host network
every container is connected to same bridge  can  call each other

bridge use to connect containers to the host network

bridge isolate its containers from another containers are 
connected in another bridge 

just in same host network can call each other 

container can be connected to more than one network(bridge,overlay,host,none)



important:
if you install docker it will create bridge 0 by default
with default network is bridge 0 and default ip is 172.17.0.1/16 and gateway is 172.17.0.1

and then  every bridge you create it will create virtual interface card  in the host 

if u create container it will connect to bridge 0 and 
create eth0 and ip will in this range 172.17.0.1/16



if you create  autmoaticly it will create and connect to bridge 0




host:
host network is used to connect containers to the host network

host doesn't create any bridge it is used to connect containers to the host network
and not give any ip to the container it is used to connect containers to the host network

none:
none network is used to disable network in container

none doesn't create any bridge it is used to disable network in container
so its can't access internet 


