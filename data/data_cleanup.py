import csv
import pandas as pd


def main():
    files = ['climate-monthly1.csv', 'climate-monthly2.csv', 'climate-monthly3.csv']
    df = pd.concat([pd.read_csv(f) for f in files])
    df.dropna(subset=['LATITUDE', 'LONGITUDE', 'LOCAL_DATE', 'MEAN_TEMPERATURE'], inplace=True)

    drop_labels = ['x', 'y', 'CLIMATE_IDENTIFIER', 'ID', 'LAST_UPDATED', 'ENG_PROVINCE_NAME', 'FRE_PROVINCE_NAME']
    df.drop(drop_labels, axis=1, inplace=True)

    df.to_csv('1950_2021_cleaned.csv')


if __name__ == '__main__':
    main()
