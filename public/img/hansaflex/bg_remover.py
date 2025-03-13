from rembg import remove
from PIL import Image

# List of uploaded file paths
file_paths = [
    "./01_Tuba_Hidraulik.jpg",
    "./02_Tuba_Industrial.jpg",
    "./03_Rakorderi_Hidr.jpg",
    "./04_Xhunto.jpg",
    "./05_Rakorderi_metal.jpg",
    "./06_Tubat_metalik.jpg",
    "./07_Adaptor.jpg",
    "./08_Flanxh.jpg",
    "./09_Rubineta.jpg",
    "./10_Montim.jpg",
    "./11_Uje.jpg",
    "./12_Ajer.jpg",
    "./13_Komp.jpg",
    "./14_Filter.jpg",
    "./15_Matje.jpg",
    "./16_Guanicione.jpg",
    "./17_Aksesor.jpg",
]

# Process each image and remove background
output_files = []
for file_path in file_paths:
    with Image.open(file_path) as img:
        img_no_bg = remove(img)
        output_path = file_path.replace(".jpg", "_no_bg.png")
        img_no_bg.save(output_path, "PNG")
        output_files.append(output_path)
