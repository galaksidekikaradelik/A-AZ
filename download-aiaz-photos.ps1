# Run this from inside your A-AZ project folder (where src\ lives).
# It downloads all AIAZ festival photos from FilmFreeway into src\assets\2025\foto\

$targetFolder = "src\assets\2025\foto"

if (!(Test-Path $targetFolder)) {
    New-Item -ItemType Directory -Path $targetFolder -Force | Out-Null
}

$urls = @(
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/011/097/337/original/_SMY2911.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/021/original/_SMY2346.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/071/original/_SMY2906.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/058/original/DSC09667.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/022/original/_SMY2343.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/098/original/_SMY2706.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/027/original/_SMY2368.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/026/original/_SMY2385.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/023/original/_SMY2562.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/025/original/_SMY2572.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/024/original/_SMY2476.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/094/original/_SMY2695.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/028/original/_SMY2375.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/109/original/_SMY2939.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/108/original/_SMY2954.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/099/original/_SMY2694.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/097/original/_SMY2730.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/096/original/_SMY2693.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/095/original/_SMY2669.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/084/original/_SMY2617.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/093/original/_SMY2737.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/083/original/_SMY2611.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/082/original/_SMY2622.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/060/original/DSC09660.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/059/original/DSC09701.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/057/original/_SMY2951.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/056/original/DSC09731.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/054/original/DSC09652.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/055/original/DSC09736.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/053/original/DSC09692.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/052/original/DSC09726.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/050/original/DSC09741.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/051/original/DSC09729.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/049/original/DSC09648.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/048/original/DSC09653.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/047/original/DSC09697.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/046/original/DSC09757.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/045/original/DSC09677.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/044/original/DSC09684.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/043/original/DSC09682.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/042/original/_SMY2491.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/040/original/_SMY2464.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/041/original/_SMY2500.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/039/original/_SMY2457.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/038/original/_SMY2479.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/037/original/_SMY2483.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/035/original/_SMY2450.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/036/original/_SMY2520.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/034/original/_SMY2524.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/031/original/_SMY2454.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/030/original/_SMY2365.jpg",
    "https://filmfreeway-production-storage-01-connector.filmfreeway.com/attachments/files/010/032/029/original/_SMY2425.jpg"
)

$i = 1
foreach ($url in $urls) {
    $fileName = "aiaz2025-{0:D2}.jpg" -f $i
    $destination = Join-Path $targetFolder $fileName

    Write-Host "Downloading $i / $($urls.Count): $fileName"

    try {
        Invoke-WebRequest -Uri $url -OutFile $destination -UseBasicParsing
    } catch {
        Write-Host "  FAILED: $url"
    }

    $i++
}

Write-Host ""
Write-Host "Done. $($urls.Count) photos saved to $targetFolder"
