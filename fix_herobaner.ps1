$heroBanner = "C:\Users\vinay\OneDrive\Desktop\SD\portfolio\jewellery\src\components\HeroBanner.tsx"
$content = Get-Content $heroBanner -Raw

# Increase glass effect in HeroBanner backdrop
$content = $content -replace 'bg-ivory/60', 'bg-ivory/70'
$content = $content -replace 'bg-ivory/40', 'bg-ivory/65'
$content = $content -replace 'backdrop-blur-lg', 'backdrop-blur-xl'

Set-Content $heroBanner $content -Encoding UTF8
Write-Host "HeroBanner.tsx updated successfully"
