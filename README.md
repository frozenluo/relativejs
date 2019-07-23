# relativejs
Get relative path, based on current path.
This module could solve problems of *how many `../` should I use*.

# Usage
```javascript
const relativeTo = require('relative.to');
const path = relativeTo('/root/a', '/root/b'); // b
```

# API

## relative(currentFile, distFile)
currentFile: {String} currentFile path
distFile: {String} target file that need to be calculated
