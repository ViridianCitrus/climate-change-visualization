import sqlite3
import pandas as pd


def main():
    db = sqlite3.connect('climatedata.db')
    cur = db.cursor()
    cur.execute('DROP TABLE IF EXISTS CLIMATE_DATA;')
    schema = \
        '''
    CREATE TABLE IF NOT EXISTS CLIMATE_DATA (
        latitude REAL NOT NULL,
        longitude REAL NOT NULL,
        province TEXT NOT NULL,
        station_name TEXT,
        year INTEGER NOT NULL,
        mean_temp REAL NOT NULL
    );
    '''
    cur.execute(schema)

    df = pd.read_csv('ahccd-annual-cleaned.csv')
    rows = df.shape[0]
    for index, row in df.iterrows():
        if index % 1000 == 0:
            print(f'{index/rows*100:.1f}% uploaded.', end='\r')
        sql = \
            '''
            INSERT INTO CLIMATE_DATA (latitude, longitude, province, station_name, year, mean_temp)
            VALUES (
                ?,
                ?,
                ?,
                ?,
                ?,
                ?
            );
            '''
        cur.execute(sql, (row['latitude'], row['longitude'], row['province'], row['station_name'], row['year'],
                    row['mean_temp'], ))
    db.commit()


if __name__ == '__main__':
    main()
