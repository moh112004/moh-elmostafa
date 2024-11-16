from transformers import pipeline

# إنشاء وحدة تحليل المشاعر
sentiment_analyzer = pipeline("sentiment-analysis")

# النصوص التي ترغب في تحليل مشاعرها
reviews = [
    "I love this app! It's incredibly useful.",
    "The app is okay, but it crashes too often.",
    "I hate this app. It's a waste of time."
]

# تحليل المشاعر لكل نص
for review in reviews:
    result = sentiment_analyzer(review)[0]
    print(f"Review: {review}")
    print(f"Label: {result['label']}, Score: {result['score']}\n")
