import openpyxl
from openpyxl.styles import Border, Side

workbook = openpyxl.Workbook()
sheet = workbook.active

header = ['商品名', '単価', '数量', '売上']
sheet.append(header)

data = [
    ['商品A', 1000, 8, 8000],
    ['商品B', 2000, 5, 10000],
    ['商品C', 500, 13, 6500]
]


for row in data:
    sheet.append(row)

thin_border = Border(left=Side(style='thin'),
                    right=Side(style='thin'),
                    top=Side(style='thin'),
                    bottom=Side(style='thin'))

for row in sheet['A1:D4']:
    for cell in row:
        cell.border = thin_border

workbook.save('売上表.xlsx')
