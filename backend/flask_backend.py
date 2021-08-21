import os
import sqlite3
from flask import Flask, request

app = Flask(__name__)


# TODO: Change routes as needed to match front end
@app.route("/api/region/<string:city>")
def loc_return(city):
    """
    Return a .json of the given city's climate data upon request
    """
    return jsonify()


@app.route("/api/region")
def station_return():
    """
    Return a .json of the given station's climate data upon request
    """
    sid = request.args['sid']
    db = sqlite3.connect('climatedata.db')
    cur = db.cursor()
    data = cur.execute('SELECT * FROM CLIMATE_DATA WHERE station_id = ?;', (sid,))
    output = dict()
    for line in data:
        output[line[5]] = line[6]
    cur.close()
    return output


if __name__ == '__main__':
    app.run(debug=True)
