import os
from os.path import join, dirname
from dotenv import load_dotenv,find_dotenv

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(find_dotenv())

MONGOURI = os.environ.get("MONGOURI")
DBNAME = os.environ.get("DBNAME")
COLLECTION = os.environ.get("COLLECTION")