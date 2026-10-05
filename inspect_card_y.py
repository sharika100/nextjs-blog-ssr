from PIL import Image
import numpy as np

img = Image.open('C:/Users/shari/.gemini/antigravity/brain/2eeba512-51c1-41e8-8935-678eab70fd0b/scratch/beyondui_blog_preview.png').convert('RGB')
arr = np.array(img)

# Let's inspect x=85 from y=170 to y=280
for y in range(173, 280):
    val = arr[y, 85, :]
    if np.any(val < 250):
        # Found non-white element!
        print(f"y={y}: color={val}")
