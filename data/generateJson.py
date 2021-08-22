import sqlite3
import json


def main():
    db = sqlite3.connect('climatedata.db')
    cur = db.cursor()
    data = cur.execute('SELECT * FROM CLIMATE_DATA;').fetchall()
    print(data[0])
    cur.close()

    ans = []
    for row in data:
        ans.append({
            'latitude': row[0],
            'longitude': row[1],
            'province': row[2],
            'station_name': row[3],
            'id': row[4],
            'year': row[5],
            'mean_temp': row[6],
        })

    with open('tempdata.json', 'w') as fp:
        json.dump(ans, fp, indent=4)


if __name__ == '__main__':
    main()
