#!/bin/bash

if ! command -v cwebp &> /dev/null; then
    echo "Error: cwebp command is not installed. Please install it and try again."
    exit 1
fi

directory="public"

if [ ! -d "$directory" ]; then
    echo "Error: Directory '$directory' does not exist."
    exit 1
fi

# Loop through all files in the "public" directory
for img in "$directory"/*; do
    # Skip if it's not a file
    [ -f "$img" ] || continue

    # Get the file extension and the filename
    extension="${img##*.}"
    filename="$(basename "$img")"

    # Skip .svg files and files named CNAME
    if [ "$extension" == "svg" ] || [ "$filename" == "CNAME" ]; then
        continue
    fi

    if [ "$extension" == "webp" ]; then
        continue
    fi

    # Convert the image to WebP format
    output="${img%.*}.webp"
    echo "Converting $img to $output..."
    cwebp "$img" -o "$output"

    # Remove the original image after conversion
    rm "$img"
done

echo "Conversion process completed."
