!pip install requests beautifulsoup4

import requests
from bs4 import BeautifulSoup

# 本文を取得する対象のURL
url = 'https://news.yahoo.co.jp/articles/c1f8ea7a27aff615919bb1288beaf8e4bdbc84df'

# HTTPリクエストを送信し、HTMLを取得する
response = requests.get(url)

# HTMLを解析する
soup = BeautifulSoup(response.text, 'html.parser')

# CSSセレクターを使用して、本文を取得する
body_elements = soup.select_one('.article_body>div>p')

# 本文のテキストを取得する
body_text = body_elements.text

# 本文を表示する
print(body_text)
