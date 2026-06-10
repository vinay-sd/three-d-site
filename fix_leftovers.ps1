$homepage = "C:\Users\vinay\OneDrive\Desktop\SD\portfolio\jewellery\src\pages\HomePage.tsx"
$fieldnotes = "C:\Users\vinay\OneDrive\Desktop\SD\portfolio\jewellery\src\pages\FieldNotesPage.tsx"
$routes = "C:\Users\vinay\OneDrive\Desktop\SD\portfolio\jewellery\src\pages\RoutesPage.tsx"

# HomePage.tsx - find remaining gold-500
$content = Get-Content $homepage -Raw
$matches = Select-String -Path $homepage -Pattern "text-gold-500" -SimpleMatch
foreach ($m in $matches) {
  Write-Host "Found in HomePage: $($m)"
}
$content = $content -replace 'text-gold-500', 'text-brand-tertiary'
Set-Content $homepage $content -Encoding UTF8
Write-Host "Fixed gold-500 in HomePage.tsx"

# FieldNotesPage.tsx - find remaining champagne
$matches = Select-String -Path $fieldnotes -Pattern "champagne" -SimpleMatch
foreach ($m in $matches) {
  Write-Host "Found in FieldNotesPage: $($m)"
}
$content = Get-Content $fieldnotes -Raw
$content = $content -replace 'champagne', 'brand-accent'
Set-Content $fieldnotes $content -Encoding UTF8
Write-Host "Fixed champagne in FieldNotesPage.tsx"

# RoutesPage.tsx - find remaining champagne
$matches = Select-String -Path $routes -Pattern "champagne" -SimpleMatch
foreach ($m in $matches) {
  Write-Host "Found in RoutesPage: $($m)"
}
$content = Get-Content $routes -Raw
$content = $content -replace 'champagne', 'brand-accent'
Set-Content $routes $content -Encoding UTF8
Write-Host "Fixed champagne in RoutesPage.tsx"
