from rembg import remove
from PIL import Image

# List of uploaded file paths
file_paths = [
    "./01_Tuba_Hidraulik.webp",
    "./02_Tuba_Industrial.webp",
    "./03_Rakorderi_Hidr.webp",
    "./04_Xhunto.webp",
    "./05_Rakorderi_metal.webp",
    "./06_Tubat_metalik.webp",
    "./07_Adaptor.webp",
    "./08_Flanxh.webp",
    "./09_Rubineta.webp",
    "./10_Montim.webp",
    "./11_Uje.webp",
    "./12_Ajer.webp",
    "./13_Komp.webp",
    "./14_Filter.webp",
    "./15_Matje.webp",
    "./16_Guanicione.webp",
    "./17_Aksesor.webp",
]

# Process each image and remove background
output_files = []
for file_path in file_paths:
    with Image.open(file_path) as img:
        img_no_bg = remove(img)
        output_path = file_path.replace(".webp", "_no_bg.webp")
        img_no_bg.save(output_path, "PNG")
        output_files.append(output_path)
