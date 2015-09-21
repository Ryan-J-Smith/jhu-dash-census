# jhu-dash-census

Selected census datasets and scripts for getting more data

## Project as it stands:

The current project has **two** goals

### Aggregating demographics of data points

Given a set of data points corresponding to physical locations (e.g. address or latitude and longitude), we would like to construct a summary demographic.

Example: 

### Comparing demographics to census tracts

Given a particular demographic description, can we identify census divisions that have similar properties.

As an example, if we are interested in an outreach program to target low-income senior citizens, which census regions should be targeted?

## Challenges:

How do we compare different census regions?

## Current goals:

* Upload scripts for getting census data

* Upload a sample of data to begin working with

* Identify relevant census variables that make for meaningful comparisons (e.g. income, age, level of education)

## Note:

You will need to install a few python packages for this to work.  I will try to add a setup file, but in the mean time you will need to `pip install` the following packages (if you don't have them already):

* `pandas`
* `requests`
* `us`

I have also assumed that you have iPython notebook installed.  Standalone python scripts will be up soon.
