const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk('./src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace <Link to="..."> with <Link href="...">
    content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');

    // Replace imports
    if (content.includes("from 'react-router-dom'")) {
      content = content.replace(/import\s+{\s*Link\s*}\s+from\s+'react-router-dom'/g, "import Link from 'next/link'");
      content = content.replace(/import\s+{\s*Link,\s*useLocation\s*}\s+from\s+'react-router-dom'/g, "import Link from 'next/link'\nimport { usePathname } from 'next/navigation'");
      content = content.replace(/useLocation\(\)/g, "usePathname()");
      content = content.replace(/\.pathname/g, ""); // usePathname directly returns the string, while useLocation returns an object with pathname
      
      content = content.replace(/import\s+{\s*useSearchParams\s*}\s+from\s+'react-router-dom'/g, "import { useSearchParams } from 'next/navigation'");
      
      content = content.replace(/import\s+{\s*useParams,\s*useNavigate\s*}\s+from\s+'react-router-dom'/g, "import { useParams, useRouter } from 'next/navigation'");
      content = content.replace(/useNavigate\(\)/g, "useRouter()");
      content = content.replace(/navigate\(/g, "router.push("); // Will need to manually check if they assigned `const navigate = useNavigate()` vs `const router = useRouter()`
    }

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${filePath}`);
    }
  }
});
