#!/bin/bash

# Navigate to the directory containing your JS files
cd /path/to/your/folder

# Loop through all .js files in the directory and its subdirectories, excluding the 'koukou' directory
find . -name "*.js" -not -path "./node_modules/*" | while read -r file; do
    echo "File: $file"
    echo "-----------------------------------"
    cat "$file"
    echo ""
    echo ""
done

