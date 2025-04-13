from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from pydantic import BaseModel

app = FastAPI()
client = MongoClient('mongodb+srv://brybryboi215:C3B32haPb6huuznE@cluster0.cfzxa0f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
db = client.scores

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5173", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Event(BaseModel):
    name : str
    eventId : int

class Score(BaseModel):
    name : str
    score : float
    event : Event
    ranking : int

@app.post("/api/submit_score")
async def submit_score(data: Score):
    db.scores.insert_one(data.dict())
    return {"message" : "Score Submitted Successfully!"}

@app.get("/api/{event}/{name}")
async def get_athlete(event : str, name : str):
    try:
        result = db.scores.find_one({
            "name": name,
            "event.name": event
        })
        if not result:
            return "get request not good"
        result["_id"] = str(result["_id"])
        return result
    except Exception as e:
        print("🔥 Error:", e)
        return e
