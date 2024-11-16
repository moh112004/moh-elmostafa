from google_play_scraper import reviews, Sort

# جلب التعليقات
result, _ = reviews(
    'com.whatsapp',  # معرف تطبيق واتساب كمثال
    lang='ar',
    country='us',
    sort=Sort.NEWEST,  # جلب أحدث التعليقات
    count=5
)

# عرض التعليقات
for review in result:
    print(f"Rating: {review['score']}, Comment: {review['content']}\n")
