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
        station_name TEXT,
        year INTEGER NOT NULL,
        month INTEGER NOT NuLL,
        mean_temp REAL NOT NULL,
        total_precip REAL
    );
    '''
    cur.execute(schema)

    df = pd.read_csv('1950_2021_cleaned.csv')
    rows = df.shape[0]
    for index, row in df.iterrows():
        if index % 1000 == 0:
            print(f'{index/rows*100:.1f}% uploaded.', end='\r')
        sql = \
            '''
            INSERT INTO CLIMATE_DATA (latitude, longitude, station_name, year, month, mean_temp, total_precip)
            VALUES (
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?
            );
            '''
        cur.execute(sql, (row['LATITUDE'], row['LONGITUDE'], row['STATION_NAME'], row['LOCAL_YEAR'],
                    row['LOCAL_MONTH'], row['MEAN_TEMPERATURE'], row['TOTAL_PRECIPITATION'],))
    db.commit()


if __name__ == '__main__':
    main()
