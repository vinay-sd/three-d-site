$routesPage = "C:\Users\vinay\OneDrive\Desktop\SD\portfolio\jewellery\src\pages\RoutesPage.tsx"
$flightLogPage = "C:\Users\vinay\OneDrive\Desktop\SD\portfolio\jewellery\src\pages\FlightLogPage.tsx"
$expeditionsPage = "C:\Users\vinay\OneDrive\Desktop\SD\portfolio\jewellery\src\pages\ExpeditionsPage.tsx"
$fieldNotesPage = "C:\Users\vinay\OneDrive\Desktop\SD\portfolio\jewellery\src\pages\FieldNotesPage.tsx"

function StrengthenGlass($path) {
  $content = Get-Content $path -Raw
  
  # Increase glass effect: bg-ivory/30 -> bg-ivory/60, backdrop-blur-sm -> backdrop-blur-xl
  $content = $content -replace 'bg-ivory/30\s', 'bg-ivory/60 '
  $content = $content -replace 'bg-ivory/40\s', 'bg-ivory/65 '
  $content = $content -replace 'backdrop-blur-sm', 'backdrop-blur-xl'
  
  # Fix any remaining bg-ivory/ border-ivory patterns in page banner backgrounds
  $content = $content -replace 'bg-ivory/15\s', 'bg-ivory/50 '
  $content = $content -replace 'bg-ivory/20\s', 'bg-ivory/50 '
  
  Set-Content $path $content -Encoding UTF8
  Write-Host "Fixed: $path"
}

StrengthenGlass $routesPage
StrengthenGlass $flightLogPage
StrengthenGlass $expeditionsPage
StrengthenGlass $fieldNotesPage

Write-Host "All pages updated with stronger glass effects"
