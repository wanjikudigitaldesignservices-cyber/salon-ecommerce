const fs = require('fs');
const path = require('path');

function prependUseClient(dir) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      prependUseClient(dirPath);
    } else if (dirPath.endsWith('.tsx') || dirPath.endsWith('.ts')) {
      let content = fs.readFileSync(dirPath, 'utf8');
      if (
        !content.includes('"use client"') && 
        !content.includes("'use client'") &&
        (content.includes('useState') || content.includes('useEffect') || content.includes('useRouter') || content.includes('useSearchParams') || content.includes('useCartStore') || content.includes('usePathname') || content.includes('onClick'))
      ) {
        fs.writeFileSync(dirPath, "'use client';\n\n" + content);
        console.log(`Added 'use client' to ${dirPath}`);
      }
    }
  });
}

prependUseClient('./app');
prependUseClient('./src/components');
