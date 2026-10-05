from PIL import Image
import numpy as np

img = Image.open('C:/Users/shari/.gemini/antigravity/brain/2eeba512-51c1-41e8-8935-678eab70fd0b/scratch/beyondui_blog_preview.png').convert('RGB')
arr = np.array(img)

# Card 1 image starts at y=61. Let's find where the image ends
# by checking pixels between x=80 and x=150
for y in range(61, 220):
    val = arr[y, 100, :]
    # Check if pure white (255, 255, 255)
    if np.all(val > 250):
        print(f"Row {y} is white! Card 1 image ends before this row.")
        break

# Image top: y=61, bottom: y=173.
# Height = 173 - 61 = 112 px.
# Width = 230 - 76 = 154 px.
# Aspect ratio = 154 / 112 = 1.375 (approximately 4:3 or 1.33:1 to 1.37:1, which is aspect-[4/3] or aspect-[16/11]!)
