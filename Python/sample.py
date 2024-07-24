user_names = ["侍太郎","侍一郎","侍二郎","侍三郎","侍四郎"]
print(user_names[1])#2番目の要素だけを表示
user_names[1]="侍花子"#2番目の要素を更新
print(user_names)
user_names.append("侍五郎")#6番目の要素を追加
print(user_names)
user_names.pop(2)#3番目の要素を削除(0始まりのため2を指定)
print(user_names)

for i in range(1,11):
    print(i)
    if i==5:
        break
    
    import random

for i in range(1,11):
    num = random.randint(1,20)
    print(f"{i}回目の結果は{num}です。")        
    if num == 20:
        print("20が出たので繰り返し処理を強制終了します。")
        break
    
for i in range(1,11):
    if i %2==1:
        continue
    print(i)