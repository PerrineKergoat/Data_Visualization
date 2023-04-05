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
import matplotlib.pyplot as plt
from IPython.display import display

# %%
df_country_marine = pd.read_csv('data/country_marine_protected_area.csv')
df_country_terrestrial = pd.read_csv('data/country_terrestrial_protected_area.csv')
df_country_vulnerable = pd.read_csv('data/country_vulnerable.csv')

display(df_country_marine.head(2))
display(df_country_terrestrial.head(2))
display(df_country_vulnerable.head(2))


# %%
# plot evolution of protected areas over time per country: keep evolution year vs value
def plot_evolution(df, interesting_countries, area_type):
    evolution_by_country = df.groupby('Country').apply(lambda x: x[['Year', 'Value']].values.tolist()).reset_index()
    evolution_by_country.columns = ['Country', 'evolution']

    interesting_countries = ['France', 'United Kingdom', 'Spain', 'Italy', 'Germany', 'G20']

    for country in interesting_countries:
        evolution = evolution_by_country[evolution_by_country['Country'] == country]['evolution'].values[0]
        plt.plot([x[0] for x in evolution], [x[1] for x in evolution], label=country)

    plt.legend()
    plt.title(f'Evolution of {area_type} protected areas over time per country')
    plt.show()

plot_evolution(df_country_marine, ['France', 'United Kingdom', 'Spain', 'Italy', 'Germany', 'G20'], 'marine')
plot_evolution(df_country_terrestrial, ['France', 'United Kingdom', 'Spain', 'Italy', 'Germany', 'G20'], 'terrestrial')


# %%
pivot = df_country_vulnerable.pivot_table(index=['Country'], columns=['IUCN Category'], values='Value')

pivot = pivot[['Threatened species as % of known species']]

#remove rows with NaN values
pivot = pivot.dropna()

# plot a bar graph of the pivot table
pivot.plot(kind='bar', stacked=True, figsize=(10, 6))

# add axis labels and a title
plt.xlabel('Country')
plt.ylabel('% of known species')
plt.title('Threatened species as % of known species for each country')
# remove legend 
plt.legend().remove()

# display the plot
plt.show()

# %%
