from fastapi import FastAPI
from pymongo import MongoClient

app = FastAPI()
client = MongoClient('mongodb+srv://brybryboi215:C3B32haPb6huuznE@cluster0.cfzxa0f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
db = client.scores

@app.get("/")
async def hello():
    return {"message" : "hello world"}