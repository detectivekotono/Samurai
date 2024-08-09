array = ["水","金","地","火","木","土","天","海","冥"]
#for文とwhile文を使用して繰り返し出力させる
for i in array:
  print(i)

while len(array) !=0:
  print(array[0])
  array.pop(0)