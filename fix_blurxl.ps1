$pages = @(
  "C:\Users\vinay\OneDrive\Desktop\SD\portfolio\jewellery\src\pages\ExpeditionsPage.tsx",
  "C:\Users\vinay\OneDrive\Desktop\SD\portfolio\jewellery\src\pages\FieldNotesPage.tsx",
  "C:\Users\vinay\OneDrive\Desktop\SD\portfolio\jewellery\src\pages\FlightLogPage.tsx",
  "C:\Users\vinay\OneDrive\Desktop\SD\portfolio\jewellery\src\pages\RoutesPage.tsx"
)

foreach ($page in $pages) {
  $content = Get-Content $page -Raw
  $content = $content -replace 'backdrop-blur-lg', 'backdrop-blur-xl'
  Set-Content $page $content -Encoding UTF8
  Write-Host "Fixed backdrop-blur in: $page"
}
