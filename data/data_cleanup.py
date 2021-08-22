import csv
import pandas as pd
import numpy as np
import json

def main():

    df = pd.read_csv('ahccd-annual.csv')

    stationid = pd.read_csv('station_names.csv')

    stationdict = pd.Series(stationid['Station Name'].values, index=stationid['Station ID']).to_dict()

    df = df[['lat__lat', 'lon__long', 'province__province',
             'station_id__id_station', 'year__annee', 'temp_mean__temp_moyenne']]
    df['station_name'] = df['station_id__id_station'].apply(lambda x: stationdict[x])
    df.dropna(subset=['lat__lat', 'lon__long', 'year__annee'], inplace=True)
    invalidindex = df[df['temp_mean__temp_moyenne'] == -9999.9].index
    df['temp_mean__temp_moyenne'] = df['temp_mean__temp_moyenne'].apply(lambda x: np.nan if x == -9999.9 else x)
    df = df.rename(columns={
        'lat__lat': 'latitude',
        'lon__long': 'longitude',
        'station_id__id_station': 'station_id',
        'year__annee': 'year',
        'temp_mean__temp_moyenne': 'mean_temp',
        'province__province': 'province'

    })
    for sid in df['station_id'].unique():
        if df[df['station_id'] == sid]['mean_temp'].isnull().all():
            drop = df[df['station_id'] == sid].index
            df.drop(drop, inplace=True)

    df.to_csv('ahccd-annual-cleaned.csv')
    with open('station_id.json', 'w') as fp:
        json.dump(stationdict, fp, indent=4)



if __name__ == '__main__':
    main()
