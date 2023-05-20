import pandas as pd


red_list = pd.read_csv('data/red_list_index_country_timeseries.csv')
red_list = red_list.drop(
    ['COU', 'Variable - Red List', 'YEA', 'Flag Codes', 'Flags'], axis=1)
red_list = red_list[red_list['VAR'] == 'INDEX']

# write to csv
red_list.to_csv('data/transformed/iucn_red_list.csv', index=False)
