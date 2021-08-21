import os
import flask
from flask_sqlalchemy import SQLAlchemy

BACKEND_PATH = os.path.dirname(os.path.realpath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(BACKEND_PATH, '..'))
DATABASE_PATH = os.path.join(PROJECT_ROOT, 'data')
DATABASE = os.path.join(DATABASE_PATH, 'climate_data.db')

app = flask.Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////" + DATABASE
db = SQLAlchemy(app)


# TODO: Change routes as needed to match front end
@app.route("/api/region/<string:city>")
def loc_return(city):
    """
    Return a .json of the given city's climate data upon request
    """
    return flask.jsonify()


if __name__ == '__main__':
    app.run(debug=True)
