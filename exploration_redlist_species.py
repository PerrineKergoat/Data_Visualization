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
# ## Species.csv

# %%
species = pd.read_csv('data/species.csv')
species.head()

# %%
# turn all values of all columns but the first into numeric
species.iloc[:, 1:] = species.iloc[:, 1:].apply(pd.to_numeric, errors='coerce')

# drop additive columns
species = species.drop(columns=['Subtotal (EX+EW)', 'Subtotal (EX+EW+ CR(PE)+CR(PEW))', 'Subtotal (threatened spp.)', 'Total'])

# drop row where the name is "not assigned"
species = species.drop(species[species['Name'] == 'NOT ASSIGNED'].index)

# drop row where the name is "Total"
species = species.drop(species[species['Name'] == 'Total'].index)

# %%
species_exploded = species.melt(id_vars=['Name'], var_name='Category', value_name='Count')
# get the top 10 names with the highest summed count
top_10_names = species_exploded.groupby('Name').sum().sort_values(by='Count', ascending=False).head(10).index

# replace all names that are not in the top 10 with "Other"
species_exploded['Name'] = species_exploded['Name'].apply(lambda x: x if x in top_10_names else 'OTHER')

# aggregate the "Other" rows
species_exploded = species_exploded.groupby(['Name', 'Category']).sum().reset_index()

# hoverable stacked bar plot with the number of species per category
fig = px.bar(species_exploded, 
            x='Category', 
            y='Count', 
            color='Name', 
            barmode='stack', 
            title='Number of species per extinct category', 
            color_discrete_map={
                "GASTROPODA": "rgb(102,194,165)",
                "INSECTA": "rgb(252,141,98) ",
                "MAMMALIA": "rgb(141,160,203)",
                "LILIOPSIDA": "rgb(231,138,195)",
                "REPTILIA": "rgb(166,216,84)",
                'AMPHIBIA': 'rgb(255,217,47)',
                'AVES': 'rgb(229,196,148)',
                'ACTINOPTERYGII': 'rgb(255,255,179)',
                'CHONDRICHTHYES': 'rgb(158,185,243)',
                'ANTHOZOA': 'rgb(139,224,164)',
                'OTHER': 'rgb(179,179,179)'})

# center the title
fig.update_layout(title_x=0.5)
# make the plot taller
fig.update_layout(height=1000)
fig.show()


# %% [markdown]
# ## red_list_index_country_timeseries.csv

# %%
redlist = pd.read_csv('data/red_list_index_country_timeseries.csv')

# drop Flag Codes and Flags columns
redlist = redlist.drop(columns=['Flag Codes', 'Flags', 'YEA', 'COU'])

# Only keep rows where VAR is INDEX
redlist = redlist[redlist['VAR'] == 'INDEX']

redlist.head()

# %%
# list the uniques values of the column "Country"
redlist['Country'].unique() 

# Keep only some countries for a better visualization
redlist = redlist[redlist['Country'].isin(["Mauritius", "World", "Israel", "United Kingdom", "India", "United States", "China (People's Republic of)", "Italy", "Germany", "New Zealand", "Switzerland", "France"])]

# %%
# plot the red list index over time 
fig = px.line(redlist, x='Year', y='Value', color='Country', title='Red List Index over time', color_discrete_sequence=px.colors.qualitative.Dark24)

# make the plot taller
fig.update_layout(height=1000)
fig.update_layout(title_x=0.5)
fig.show() 

# %%



