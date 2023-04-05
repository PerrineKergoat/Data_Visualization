# Project of Data Visualization (COM-480)

| Student's name  | SCIPER |
| --------------- | ------ |
| Colin Hofmann   | 301952 |
| Ludovic Burnier | 301308 |
| Perrine Kergoat | 295892 |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (7th April, 5pm)

**10% of the final grade**

This is a preliminary milestone to let you set up goals for your final project and assess the feasibility of your ideas.
Please, fill the following sections about your project.

*(max. 2000 characters per section)*

### Dataset

#### Composition

Our dataset is composed of 5 files and can be found in the [`data`](./data) folder. The different files are:
- [country_marine_protected_area.csv](./data/country_marine_protected_area.csv)
- [country_terrestrial_protected_area.csv](./data/country_terrestrial_protected_area.csv)
- [country_vulnerable.csv](./data/country_vulnerable.csv)
- [red_list_index_country_timeseries.csv](./data/red_list_index_country_timeseries.csv)
- [species.csv](./data/species.csv)
  
Those files are all CSV files and were downloaded on Kaggle from [here](https://www.kaggle.com/datasets/johnharshith/number-of-species-in-each-iucn-red-list-category) and [here](https://www.kaggle.com/datasets/sarthakvajpayee/global-species-extinction).

#### Description
Note that this dataset is, as specified and Kaggle, not official data but rather a new dataset created based on [IUCN Red List's](https://www.iucnredlist.org/) data.

The IUCN Red List is an indicator world’s biodiversity health. This tool is used to design and measure conservation action and policy and it helps inform conservation decisions. It regroups information about species’ range of distribution, population size, habitats and ecology, use and trade, threats, and conservation actions.

##### [Country marine protected area](./data/country_marine_protected_area.csv)
This file contains information about the size of marine protected areas in different countries. It includes
an evolution of those areas over time.

##### [Country terrestrial protected area](./data/country_terrestrial_protected_area.csv)
This file contains information about the size of terrestrial protected areas in different countries. It includes an evolution of those areas over time.

##### [Country vulnerable](./data/country_vulnerable.csv)
This file contains information about the vulnerable species in different countries and repartition of those species in different categories.

##### [Red list index country timeseries](./data/red_list_index_country_timeseries.csv)
This file contains the evolution of the red list index in different countries.

##### [Species](./data/species.csv)
This file contains information about the different species and their categories of vulnerability.


### Problematic

Our visualization of the datasets aims to highlight the biodiversity hotspots that are most in need of conservation policy and action. Looking at the number of threatened, vulnerable, or even extinct species in different countries would show the overall state of biodiversity in the world while moving away from the flag species we often hear about in the media. 

This project is intended for all those who are interested in understanding the importancy of the conservation of the species all around the world. 

### Exploratory Data Analysis

> Pre-processing of the data set you chose
> - Show some basic statistics and get insights about the data

### Related work

The row [IUCN Red Lists datasets](https://www.iucnredlist.org/resources/spatial-data-download) are largley used as reference by governmental and non-governmental institutions to create [reports](https://nc.iucnredlist.org/redlist/resources/files/1630480997-IUCN_RED_LIST_QUADRENNIAL_REPORT_2017-2020.pdf) about taxa conservation. These data are often used to create plots and visualy interpretable figures in those technical documents. 
Those data, provided by searchers in biology and conservation are also used in a lot of publications in in renowned scientific journals. These data are used to asess [biodiversity threats](https://www.nature.com/articles/s41559-021-01542-9), [anthropogenic impacts on species](https://www.nature.com/articles/s41467-023-37089-5), evolution of the [headcounts of certain monitored species](https://www.nature.com/articles/s41467-022-35091-x), ...

For this project, we have chosen to use a condensed version of these huge data. In this way, we want to compare phylogenetic taxa and focus on the comparison between countries rather than on the type of life form or species. 

We would like to explore three main axis. First display a map that would show for each country the number of species present on the different categories of the IUCN lists. Second, it would be interesting to show the evolution of the number of theatened species since 1950 in these countries. Finally, we would like to look at the species present in the Red List for the different phylogenetic taxa.

To imagine our project, we got inspiration from different sources : 
- [Natural catastrophes project (2020)](https://github.com/com-480-data-visualization/com-480-project-big-yoshi-club)
- [Covid cases evolution in Switzerland project (2020)](https://github.com/com-480-data-visualization/com-480-project-lcelo)
- [IUCN Map of threatened species](https://www.iucnredlist.org/resources/other-spatial-downloads)
- [IUCN Map of endagered ecosystems](http://assessments.iucnrle.org/)

## Milestone 2 (7th May, 5pm)

**10% of the final grade**


## Milestone 3 (4th June, 5pm)

**80% of the final grade**


## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

