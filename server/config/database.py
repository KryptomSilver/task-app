from pymongo import MongoClient
from env import MONGOURI

conn = MongoClient(host=MONGOURI)
