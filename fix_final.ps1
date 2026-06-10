$routes = "C:\Users\vinay\OneDrive\Desktop\SD\portfolio\jewellery\src\pages\RoutesPage.tsx"
$fieldnotes = "C:\Users\vinay\OneDrive\Desktop\SD\portfolio\jewellery\src\pages\FieldNotesPage.tsx"
$homepage = "C:\Users\vinay\OneDrive\Desktop\SD\portfolio\jewellery\src\pages\HomePage.tsx"

# 1. RoutesPage.tsx - fix border-champagne/15 that wasn't properly replaced
$content = Get-Content $routes -Raw
$content = $content -replace 'border border-champagne/15', 'border border-ivory/10'
Set-Content $routes $content -Encoding UTF8
Write-Host "Fixed RoutesPage.tsx border"

# 2. FieldNotesPage.tsx - fix malformed line from previous replacements
$content = Get-Content $fieldnotes -Raw
# The erroneous line: `bg-gradient-to-b from-champagne/5 to-transparent border bg-ivory/60 backdrop-blur-xl border border-ivory/5/10 flex items-center justify-center`
# Fix it: from-champagne/5 -> from-brand-accent/5, and fix the border mess
$content = $content -replace 'from-champagne/5', 'from-brand-accent/5'
$content = $content -replace 'border bg-ivory/60 backdrop-blur-xl border border-ivory/5/10', 'bg-ivory/60 backdrop-blur-xl border border-ivory/10'
Set-Content $fieldnotes $content -Encoding UTF8
Write-Host "Fixed FieldNotesPage.tsx malformed lines"

# 3. HomePage.tsx - fix remaining text-gold-500
$content = Get-Content $homepage -Raw
$content = $content -replace 'text-gold-500', 'text-brand-primary'
Set-Content $homepage $content -Encoding UTF8
Write-Host "Fixed HomePage.tsx gold-500"
