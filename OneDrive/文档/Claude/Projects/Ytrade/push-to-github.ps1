Set-Location "$env:USERPROFILE\OneDrive\文档\Claude\Projects\Ytrade"
git config user.email "yuqinghelloworld@gmail.com"
git config user.name "Yuqing"
git init
git add .
git commit -m "initial commit: YTrade stock research app"
git branch -M main
git remote remove origin 2>$null
git remote add origin https://github.com/Yuqing-Liuu/Ytrade.git
git push -u origin main
