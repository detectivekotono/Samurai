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

#朝の挨拶を出力する関数を作成する
def say_good_morning():
    print("おはようございます！")
    print("昨日はよく眠れましたか？")
    print("今日も一日頑張りましょう")
#夜の挨拶を出力する関数を作成する 
def say_good_evening():
    print("こんばんは！")
    print("今日も一日お疲れ様でした。")
#朝の挨拶を出力する関数を呼び出す
say_good_morning()
#夜の挨拶を出力する関数を呼び出す
say_good_evening()

def calculate_total(price):
#与えられた引数priceに送料を加算し、変数totalに代入する
    total=price+500
#変数totalの値を出力する
    print(f"{total}円")
#関数を呼び出し、引数として購入金額を渡す
calculate_total(1000)

def add_two_arguments(price,shippng_fee):
#与えられた引数priceと引数shipping_feeを加算し、変数totalに代入する
    total = price+shippng_fee
#変数totalの値を出力する
    print(f"{total}円")
add_two_arguments(2000,500)

#購入済みかどうかを判定する変数
purchased=True
#戻り値を返す関数を定義する
def is_purchased():
    if(purchased):
        return True
    else:
        return False
#戻り値を返す関数を条件式に使う(Trueであれば処理が実行される)
if (is_purchased()):
    print("商品は購入済みです。")