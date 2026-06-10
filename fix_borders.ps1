$homepage = "C:\Users\vinay\OneDrive\Desktop\SD\portfolio\jewellery\src\pages\HomePage.tsx"
$content = Get-Content $homepage -Raw

# Fix remaining border-ivory/5 -> border-ivory/10
$content = $content -replace 'border-ivory/5', 'border-ivory/10'

# Fix remaining p-2 in section boxes -> p-3 for consistency
$content = $content -replace '(bg-ivory/60 backdrop-blur-xl border border-ivory/10 p-)2 ', '${1}3 '
$content = $content -replace '(bg-ivory/60 backdrop-blur-xl border border-ivory/10 p-)2" ', '${1}3" '

Set-Content $homepage $content -Encoding UTF8
Write-Host "Fixed remaining border and padding issues in HomePage.tsx"
