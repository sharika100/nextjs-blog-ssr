from PIL import Image
import numpy as np

img = Image.open('C:/Users/shari/.gemini/antigravity/brain/2eeba512-51c1-41e8-8935-678eab70fd0b/scratch/beyondui_blog_preview.png').convert('RGB')
arr = np.array(img)

# Card 1 x is 76 to 230
# Let's find top and bottom of card 1 image (scan down column x=150)
col150 = arr[:, 150, :]
non_white_y = np.where(col150 < 240)[0]
print("Card 1 image y range:", non_white_y[0], "to", non_white_y[-1])
img_h = non_white_y[-1] - non_white_y[0] + 1
img_w = 230 - 76 + 1
print(f"Card 1 image size in ref: width={img_w}, height={img_h}, aspect={img_w / img_h:.3f}")

# Let's find the position of the badges:
col_badge = arr[:, 85, :]
# Sample colors of the badges:
badge1_color = arr[187, 85, :] # "Design" badge bg
badge2_color = arr[187, 130, :] # "Management" badge bg
badge3_color = arr[187, 180, :] # "Web Development" badge bg
print("Badge 1 color (Design):", badge1_color)
print("Badge 2 color (Management):", badge2_color)
print("Badge 3 color (Web Dev):", badge3_color)

# Card 2 image y range
col300 = arr[:, 300, :]
non_white_y2 = np.where(col300 < 240)[0]
print("Card 2 image y range:", non_white_y2[0], "to", non_white_y2[-1])
