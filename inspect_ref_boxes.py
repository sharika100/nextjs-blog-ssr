from PIL import Image
import numpy as np

img = Image.open('C:/Users/shari/.gemini/antigravity/brain/2eeba512-51c1-41e8-8935-678eab70fd0b/scratch/beyondui_blog_preview.png').convert('RGB')
w, h = img.size

# Let's inspect:
# 1. Position of Card 1 image
# 2. Position of Card 2 image
# 3. Position of Sidebar
# Card 1 image starts around x=77, y=60
# Let's find corners
arr = np.array(img)

print("Image shape:", arr.shape)
# Sample colors of background, badges, cards, text
# Badge 1: "Design" is cyan/light blue
# Badge 2: "Management" is purple
# Badge 3: "Web Development" is green

# Let's measure Card 1 width, height, aspect ratio
# Card 1 image is around x=77 to x=230?
# Let's scan horizontally across row y=100
row100 = arr[100, :, :]
# Find non-white pixels
non_white = np.where(row100 < 240)[0]
print("Row 100 non-white x range:", non_white[0], "to", non_white[-1])

# Card 1 image bounds
# Let's scan column by column
print("Card 1 image approx bounds:")
col_diffs = np.std(arr[80:150, :, :], axis=(0, 2))
# Print regions where std > 10 (images/content)
import itertools
content_cols = np.where(col_diffs > 10)[0]
print("Content cols:", content_cols[0], content_cols[-1])
