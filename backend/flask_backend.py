import os
import sqlite3
from flask import Flask, request


BACKEND_PATH = os.path.dirname(os.path.realpath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(BACKEND_PATH, '..'))
DATABASE_PATH = os.path.join(PROJECT_ROOT, 'data')
DATABASE = os.path.join(DATABASE_PATH, 'climatedata.db')

app = Flask(__name__)

# TODO: Change routes as needed to match front end
@app.route("/api/region")
def station_return():
    """
    Returns given station's climate data upon request
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
def station_local_return():
    """
    Returns the climate data of the given station and the closest 4 stations
    upon request
    """
    sid = request.args['sid']
    # num = request.args['num']
    db = sqlite3.connect(DATABASE)
    cur = db.cursor()
    data = cur.execute('SELECT * FROM CLIMATE_DATA WHERE station_id = ?;', (sid,))
    output = dict()
    for line in data:
        output[line[5]] = line[6]
    cur.close()
    return output


if __name__ == '__main__':
    app.run(debug=True)
