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
# ## country_terrestrial_protected_area.csv

# %%
terrestrial = pd.read_csv('data/country_terrestrial_protected_area.csv')

# %%
# drop useless columns
terrestrial = terrestrial.drop(columns=['COU', 'DESIG', 'Designation', 'DOMAIN', 'Domain', 'MEASURE', 'Measure', 'CALCULATION', 'Calculation method', 'SCOPE', 'Scope', 'YEA', 'Unit Code', 'Unit', 'PowerCode Code', 'PowerCode', 'Reference Period Code', 'Reference Period', 'Flag Codes', 'Flags'])
terrestrial.head()

# %%
# import iucn_red_list.csv
iucn_red_list = pd.read_csv('data/transformed/iucn_red_list.csv')

# %%
# get unique countries
countries = iucn_red_list['Country'].unique()

# %%
# get unique countries in terrestrial
terrestrial_countries = terrestrial['Country'].unique()

# %%
# get the countries that are in terrestrial and in iucn_red_list
countries_to_keep = np.intersect1d(countries, terrestrial_countries)

# keep only the countries that are in countries_to_keep in terrestrial
terrestrial = terrestrial[terrestrial['Country'].isin(countries_to_keep)]

# %%
# Divide the values above 100 by 100 to get the percentage
terrestrial.loc[terrestrial['Value'] > 100, 'Value'] = terrestrial['Value'] / 100
terrestrial

# %%
# check for values above 100
terrestrial[terrestrial['Value'] > 100]

# %%
# plot the data
fig = px.line(terrestrial, x='Year', y='Value', color='Country', title='Terrestrial protected area')
fig.show()


# %%
# for each country, keep a single row with a list of {x: year, y: value} dicts
terrestrial = terrestrial.groupby('Country').apply(lambda x: x[['Year', 'Value']].to_dict('records')).reset_index(name='Data')
terrestrial.head()

# %%
# save the data as a json file
terrestrial.to_json('data/transformed/country_terrestrial_protected_area.json', orient='records')
