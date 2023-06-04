# ---
# jupyter:
#   jupytext:
#     cell_metadata_filter: -all
#     custom_cell_magics: kql
#     text_representation:
#       extension: .py
#       format_name: percent
#       format_version: '1.3'
#       jupytext_version: 1.11.2
#   kernelspec:
#     display_name: all_in_one
#     language: python
#     name: python3
# ---

# %%
import pandas as pd
import numpy as np
import plotly.express as px

# %% [markdown]
# ## country_marine_protected_area.csv

# %%
marine = pd.read_csv('data/country_marine_protected_area.csv')

# %%
marine.head()

# %%
# find columns with a single value
single_value_columns = [column for column in marine.columns if marine[column].nunique() == 1]
# remove columns with a single value
marine = marine.drop(columns=single_value_columns)
marine.head()

# %%
# drop columns with only NaN values
marine = marine.dropna(axis=1, how='all')
marine.head()

# %%
# drop column YEA and COU
marine = marine.drop(columns=['YEA', 'COU'])
marine.head()

# %%
# import iucn_red_list.csv
iucn_red_list = pd.read_csv('data/transformed/iucn_red_list.csv')

# %%
# get unique countries
countries = iucn_red_list['Country'].unique()

# %%
# get unique countries in marine
marine_countries = marine['Country'].unique()

# %%
# get the countries that are in marine and in iucn_red_list
countries_to_keep = np.intersect1d(countries, marine_countries)

# keep only the countries that are in countries_to_keep in marine
marine = marine[marine['Country'].isin(countries_to_keep)]

# %%
# check for values above 100
marine[marine['Value'] > 100]

# %%
# get the countries that have values above 100
countries_above_100 = marine[marine['Value'] > 100]['Country'].unique()
# remove rows of countries that have values above 100
marine = marine[~marine['Country'].isin(countries_above_100)]
# check for values above 100
marine[marine['Value'] > 100]


# %%
# plot the data
fig = px.line(marine, x='Year', y='Value', color='Country', title='Marine protected area')
fig.show()

# %%
# for each country, keep a single row with a list of {x: year, y: value} dicts
marine = marine.groupby('Country').apply(lambda x: x[['Year', 'Value']].to_dict('records')).reset_index(name='Data')
marine.head()

# %%
# check for "World" in the country column
marine[marine['Country'] == 'World']

# %%
# save the data as a json file
marine.to_json('data/transformed/country_marine_protected_area.json', orient='records')

# %%
