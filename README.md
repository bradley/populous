Populous
------
Populous is a simple way to create selection inputs for forms that can have their options switched out seemlessly for different contexts.

## Basic Usage
First off, you'll need to include the `populous.js` file in your project along with a recent copy of jQuery. ;)

To use Populous with your select tags you will need to do two things. First, you will need to give a given select tag the `.populous-select` class. Additionally, you will need to add the `data-populous-options` attribute to your tag and populate it with an array of JSON objects, wherein each object declares all of the keys and values you want your select options to show in a given context.

For example, imagine you want your select tag to switch between showing US states and Canadian provinces. Your JSON object array would look something like this:

```
[{
"AB": "Alberta",
"BC": "British Columbia",
"MB": "Manitoba",
"NB": "New Brunswick",
"NL": "Newfoundland & Labrador",
"NS": "Nova Scotia",
"NT": "Northwest Territories",
"NU": "Nunavut",
"ON": "Ontario",
"PE": "Prince Edward Island",
"QC": "Quebec",
"SK": "Saskatchewan",
"YT": "Yukon"
},
{
"AL": "Alabama",
"AK": "Alaska",
"AZ": "Arizona",
"AR": "Arkansas",
"CA": "California",
"CO": "Colorado",
"CT": "Connecticut",
"DE": "Delaware",
"DC": "District of Columbia",
"FL": "Florida",
"GA": "Georgia",
"HI": "Hawaii",
"ID": "Idaho",
"IL": "Illinois",
"IN": "Indiana",
"IA": "Iowa",
"KS": "Kansas",
"KY": "Kentucky",
"LA": "Louisiana",
"ME": "Maine",
"MD": "Maryland",
"MA": "Massachusett]s",
"MI": "Michigan",
"MN": "Minnesota",
"MS": "Mississippi",
"MO": "Missouri",
"MT": "Montana",
"NE": "Nebraska",
"NV": "Nevada",
"NH": "New Hampshire",
"NJ": "New Jersey",
"NM": "New Mexico",
"NY": "New York",
"ND": "North Dakota",
"NC": "North Carolina",
"OH": "Ohio",
"OK": "Oklahoma",
"OR": "Oregon",
"PA": "Pennsylvania",
"RI": "Rhode Island",
"SC": "South Carolina",
"SD": "South Dakota",
"TN": "Tennessee",
"TX": "Texas",
"UT": "Utah",
"VT": "Vermont",
"VA": "Virginia",
"WA": "Washington",
"WV": "West Virginia",
"WI": "Wisconsin",
"WY": "Wyoming"
}]
```

In that case, your select tag would look like this:

```
<select id='region-selector' class='populous-select' data-populous-options='
  [{ "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas", "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "DC": "District of Columbia", "FL": "Florida", "GA": "Georgia", "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa", "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland", "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York", "ND": "North Dakota", "NC": "North Carolina", "OH": "Ohio", "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina", "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont", "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming" }, { "AB": "Alberta", "BC": "British Columbia", "MB": "Manitoba", "NB": "New Brunswick", "NL": "Newfoundland & Labrador", "NS": "Nova Scotia", "NT": "Northwest Territories", "NU": "Nunavut", "ON": "Ontario", "PE": "Prince Edward Island", "QC": "Quebec", "SK": "Saskatchewan", "YT": "Yukon" }]'>
  <!-- options will be populated by JS -->
</select>
```

Note: While this may appear to add unnecessary clutter to your markup, there are several reasons for this decision. First, this allows for minimal knowledge of a specific use case by our JS. All you need to do is define this markup and Populous will take care of the rest and provide a simple method for you to later tell it to switch to a different set of options. Additionally, this is valid HTML5 markup that does not rely on abusing other attributes like `rel` or additional markup to get the job done.

To switch from one group of options to another, just tell your Populous instance which index you want to show (0 being the first).

```
$('#region-selector').useOptionsAtIndex(1); // Will show second array of options.
```

*There is a working example of a Populous select in this repo's index.html project.*

## Preselect Options
If you need to preselect an options array, or a value within an options array, you can do so by providing an additional data attribute that, again, defines a JSON object. In this case, the object can pass either or both of two key/value definitions. The key `options_index` should reference an index number from the options array you passed in from the `data-populous-options` attribute and is used to default your selection options to one of these arrays. Should you need to select an option from the visible options array, you can also use the key `value` to reference the *value* (not the text shown in the dropdown itself) of a given option.

For example, if in the previous selection example, we wanted to show Canadian Provinces on load and preselect Quebec, we could do so like this:

```
<select id='region-selector' class='populous-select' data-populous-options-preselect='{"options_index": 1, "value": "QC"}' data-populous-options='
  [{ "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas", "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "DC": "District of Columbia", "FL": "Florida", "GA": "Georgia", "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa", "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland", "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri", "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico", "NY": "New York", "ND": "North Dakota", "NC": "North Carolina", "OH": "Ohio", "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina", "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont", "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming" }, { "AB": "Alberta", "BC": "British Columbia", "MB": "Manitoba", "NB": "New Brunswick", "NL": "Newfoundland & Labrador", "NS": "Nova Scotia", "NT": "Northwest Territories", "NU": "Nunavut", "ON": "Ontario", "PE": "Prince Edward Island", "QC": "Quebec", "SK": "Saskatchewan", "YT": "Yukon" }]'>
  <!-- options will be populated by JS -->
</select>
```

