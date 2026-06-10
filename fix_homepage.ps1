$homepage = "C:\Users\vinay\OneDrive\Desktop\SD\portfolio\jewellery\src\pages\HomePage.tsx"
$content = Get-Content $homepage -Raw

# 1. TrustedSection - wrap stats in glass boxes, fix gold color
$oldTrusted = @'
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-500/60 mb-10">Trusted By Travelers</p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-brand-dark mb-2">{s.value}</p>
              <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-ivory/50">{s.label}</p>
            </div>
          ))}
        </div>
'@
$newTrusted = @'
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-brand-tertiary/60 mb-10">Trusted By Travelers</p>
        <div className="flex flex-wrap justify-center gap-3">
          {stats.map((s) => (
            <div key={s.label} className="w-[150px] bg-ivory/60 backdrop-blur-xl border border-ivory/10 p-4 rounded-sm text-center">
              <p className="font-serif text-2xl md:text-3xl text-brand-dark mb-1">{s.value}</p>
              <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-brand-dark/50">{s.label}</p>
            </div>
          ))}
        </div>
'@
$content = $content -replace [regex]::Escape($oldTrusted), $newTrusted

# 2. FeaturesSection - increase glass effect opacity/blur
$content = $content -replace 'w-\[220px\] bg-ivory/40 backdrop-blur-sm border border-ivory/5 p-3 rounded-sm', 'w-[220px] bg-ivory/60 backdrop-blur-xl border border-ivory/10 p-4 rounded-sm'

# 3. DestinationsSection - increase glass effect
$content = $content -replace 'bg-ivory/30 backdrop-blur-sm', 'bg-ivory/60 backdrop-blur-xl'

# 4. ExperiencesSection - increase glass effect
$content = $content -replace 'w-\[180px\] bg-ivory/30 backdrop-blur-sm border border-ivory/5 p-2 text-left rounded-sm', 'w-[180px] bg-ivory/60 backdrop-blur-xl border border-ivory/10 p-3 text-left rounded-sm'

# 5. TestimonialsSection - increase glass effect
$content = $content -replace 'w-\[260px\] bg-ivory/30 backdrop-blur-sm border border-ivory/5 p-3 rounded-sm', 'w-[260px] bg-ivory/60 backdrop-blur-xl border border-ivory/10 p-4 rounded-sm'

# 6. CtaSection - fix champagne references and increase glass effect
$content = $content -replace 'border-champagne/8', 'border-ivory/10'
$content = $content -replace 'border-champagne/5', 'border-ivory/10'

# 7. CtaSection - increase main box glass effect
$content = $content -replace 'max-w-xl mx-auto bg-ivory/30 backdrop-blur-sm px-6 py-8', 'max-w-xl mx-auto bg-ivory/60 backdrop-blur-xl px-6 py-8'

Set-Content $homepage $content -Encoding UTF8
Write-Host "HomePage.tsx updated successfully"
