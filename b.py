from textblob import TextBlob 
# نص للتجربة
text = "I am very sad with the product, it not works"

# تحليل النص باستخدام TextBlob
blob = TextBlob(text)

# استخراج درجة المشاعر (القطبية) ودرجة التعبير (الذاتية)
polarity = blob.sentiment.polarity
subjectivity = blob.sentiment.subjectivity

# عرض النتائج
print(f"Polarity: {polarity}, Subjectivity: {subjectivity}")
