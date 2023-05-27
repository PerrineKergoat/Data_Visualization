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


# %%
red_list = pd.read_csv('data/red_list_index_country_timeseries.csv')
red_list = red_list.drop(
    ['COU', 'Variable - Red List', 'YEA', 'Flag Codes', 'Flags'], axis=1)
red_list = red_list[red_list['VAR'] == 'INDEX']

# %%
# write to csv
red_list.to_csv('data/transformed/iucn_red_list.csv', index=False)

# %%
country_vulnerable = pd.read_csv('data/country_vulnerable.csv')
country_vulnerable.drop(
    ['SPEC','COU', 'Unit Code', 'Unit', 'PowerCode Code', 'PowerCode', 'Reference Period Code', 'Reference Period', 'Flag Codes', 'Flags'], axis=1, inplace=True
)

# %%
# group by country and sum the number of species for each category
country_iucn_cat_repartition = country_vulnerable.groupby(['Country', 'IUCN']).sum().reset_index()
country_iucn_cat_repartition = \
    country_iucn_cat_repartition[country_iucn_cat_repartition['IUCN']\
        .isin(['CRITICAL', 'ENDANGERED', 'VULNERABLE', 'TOT_KNOWN'])]

# write to json (group by country => {country: {category: number of species}})
pre_json = dict()
for index, row in country_iucn_cat_repartition.iterrows():
    if row['Country'] not in pre_json:
        pre_json[row['Country']] = dict()
    pre_json[row['Country']][row['IUCN']] = row['Value']

# write to json
import json
with open('data/transformed/country_iucn_cat_repartition.json', 'w') as outfile:
    json.dump(pre_json, outfile)

    

# %%
# for each country take the top 10 species with the highest TOT_KNOWN value
country_top_10_species = country_vulnerable[country_vulnerable['IUCN'] == 'TOT_KNOWN']\
    .sort_values(by='Value', ascending=False)\
    .groupby(['Country']).head(10)[['Country', 'Species']]


# %%

country_species_repartition = country_vulnerable.groupby(['Country', 'IUCN', 'Species']).sum().reset_index()
country_species_repartition = country_species_repartition[
    country_species_repartition.apply(
        lambda x: x['Species'] in country_top_10_species[
            country_top_10_species['Country'] == x['Country']]['Species'].values, axis=1)]

country_species_repartition = country_species_repartition[country_species_repartition['IUCN']\
    .isin(['CRITICAL', 'ENDANGERED', 'VULNERABLE', 'TOT_KNOWN'])]

country_species_repartition.to_csv('data/transformed/country_species_repartition.csv', index=False)
