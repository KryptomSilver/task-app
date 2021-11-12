from pymongo import MongoClient

from config.environment import MONGOURI,COLLECTION,DBNAME


conn = MongoClient(MONGOURI)
db = conn[DBNAME]
collection = db[COLLECTION]
