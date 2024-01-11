from faker import Faker
from pymongo import MongoClient
from bson.objectid import ObjectId

fake = Faker()

client = MongoClient("mongodb://localhost:27017/")
db = client["recipies"]
collection = db["meals"]

def generate_fake_data():
    fake_data = {
        "idMeal": fake.uuid4(),
        "strMeal": fake.word(),
        "strDrinkAlternate": fake.word(),
        "strCategory": fake.word(),
        "strArea": fake.word(),
        "strInstructions": fake.text(),
        "strMealThumb": fake.image_url(),
        "strTags": fake.word(),
        "strYoutube": fake.url(),
        "strIngredient1": fake.word(),
        "strIngredient2": fake.word(),
        "strIngredient3": fake.word(),
    }
    return fake_data

def insert_fake_data(num_records):
    for _ in range(num_records):
        fake_data = generate_fake_data()
        collection.insert_one(fake_data)

if __name__ == "__main__":
    num_fake_records = 10
    insert_fake_data(num_fake_records)
