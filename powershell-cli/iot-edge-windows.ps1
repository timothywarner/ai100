
# Install IoT Edge runtime and prereqs
{ Invoke-WebRequest -useb https://aka.ms/iotedge-win } | Invoke-Expression; Deploy-IoTEdge

# Configure the runtime
. { Invoke-WebRequest -useb https://aka.ms/iotedge-win } | Invoke-Expression; Initialize-IoTEdge -ManualConnectionString -ContainerOs Windows


HostName=twai100iothub.azure-devices.net; DeviceId=windows1; SharedAccessKey=2IMS+5gS/SrpPb+umGupUxZ/vY5jwOth+3ZGb8x6XTM=

# Check status
Get-IOTEdgeLog