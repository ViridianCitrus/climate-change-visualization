import os
import sqlite3
import math
from flask import Flask, request


BACKEND_PATH = os.path.dirname(os.path.realpath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(BACKEND_PATH, '..'))
DATABASE_PATH = os.path.join(PROJECT_ROOT, 'data')
DATABASE = os.path.join(DATABASE_PATH, 'climatedata.db')

app = Flask(__name__)


def euclidean_distance(lat1, lat2, lon1, lon2):
    lat_comp = (lat2 - lat1) ** 2
    lon_comp = (lon2-lon1) ** 2

    return math.sqrt(lat_comp + lon_comp)


# TODO: Change routes as needed to match front end
@app.route("/api/region")
def station_return():
    """
    Returns given station's climate data
    """
    sid = request.args['sid']
    db = sqlite3.connect(DATABASE)
    cur = db.cursor()
    data = cur.execute('SELECT * FROM CLIMATE_DATA WHERE station_id = ?;', (sid,))
    output = dict()
    for line in data:
        output[line[5]] = line[6]
    cur.close()
    return output

@app.route("/api/region/local")
def local_return():
    """
    Returns the climate data of the five closest stations to the selected
    location
    """
    num = 5
    lat = request.args['lat']
    lon = request.args['lon']
    sel_pos = (lat, lon)

    db = sqlite3.connect(DATABASE)
    cur = db.cursor()
    data = cur.execute('SELECT * FROM CLIMATE_DATA')

    station_ids = list()
    count = 0
    while count <= num:
        id =
        for line in data:
            pos = (line[0], line[1])

            output[line[5]] = line[6]
    cur.close()
    return output


if __name__ == '__main__':
    app.run(debug=True)
