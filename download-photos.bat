@echo off
setlocal enabledelayedexpansion

set outDir=photos_2025
if not exist %outDir% mkdir %outDir%

set urls[0]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/011/097/337/original/_SMY2911.jpg
set urls[1]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/021/original/_SMY2346.jpg
set urls[2]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/071/original/_SMY2906.jpg
set urls[3]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/058/original/DSC09667.jpg
set urls[4]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/022/original/_SMY2343.jpg
set urls[5]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/098/original/_SMY2706.jpg
set urls[6]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/027/original/_SMY2368.jpg
set urls[7]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/026/original/_SMY2385.jpg
set urls[8]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/023/original/_SMY2562.jpg
set urls[9]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/025/original/_SMY2572.jpg
set urls[10]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/024/original/_SMY2476.jpg
set urls[11]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/094/original/_SMY2695.jpg
set urls[12]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/028/original/_SMY2375.jpg
set urls[13]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/109/original/_SMY2939.jpg
set urls[14]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/108/original/_SMY2954.jpg
set urls[15]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/099/original/_SMY2694.jpg
set urls[16]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/097/original/_SMY2730.jpg
set urls[17]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/096/original/_SMY2693.jpg
set urls[18]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/095/original/_SMY2669.jpg
set urls[19]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/084/original/_SMY2617.jpg
set urls[20]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/093/original/_SMY2737.jpg
set urls[21]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/083/original/_SMY2611.jpg
set urls[22]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/082/original/_SMY2622.jpg
set urls[23]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/060/original/DSC09660.jpg
set urls[24]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/059/original/DSC09701.jpg
set urls[25]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/057/original/_SMY2951.jpg
set urls[26]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/056/original/DSC09731.jpg
set urls[27]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/054/original/DSC09652.jpg
set urls[28]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/055/original/DSC09736.jpg
set urls[29]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/053/original/DSC09692.jpg
set urls[30]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/052/original/DSC09726.jpg
set urls[31]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/050/original/DSC09741.jpg
set urls[32]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/051/original/DSC09729.jpg
set urls[33]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/049/original/DSC09648.jpg
set urls[34]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/048/original/DSC09653.jpg
set urls[35]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/047/original/DSC09697.jpg
set urls[36]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/046/original/DSC09757.jpg
set urls[37]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/045/original/DSC09677.jpg
set urls[38]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/044/original/DSC09684.jpg
set urls[39]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/043/original/DSC09682.jpg
set urls[40]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/042/original/_SMY2491.jpg
set urls[41]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/040/original/_SMY2464.jpg
set urls[42]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/041/original/_SMY2500.jpg
set urls[43]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/039/original/_SMY2457.jpg
set urls[44]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/038/original/_SMY2479.jpg
set urls[45]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/037/original/_SMY2483.jpg
set urls[46]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/035/original/_SMY2450.jpg
set urls[47]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/036/original/_SMY2520.jpg
set urls[48]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/034/original/_SMY2524.jpg
set urls[49]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/031/original/_SMY2454.jpg
set urls[50]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/030/original/_SMY2365.jpg
set urls[51]=https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/029/original/_SMY2425.jpg

for /L %%i in (0,1,51) do (
    for %%f in ("!urls[%%i]!") do set fname=%%~nxf
    echo [%%i] Endirilir: !fname!
    curl -s -L -o "%outDir%\!fname!" "!urls[%%i]!"
)

echo.
echo Bitdi. Sekiller "%outDir%" qovluğundadır.
pause