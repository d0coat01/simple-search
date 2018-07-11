# Search!
Searches a list of countries from [https://restcountries.eu/](https://restcountries.eu/).

## Demo
Live Demo [here](https://codesandbox.io/s/y3kn65nv5z)

This was my first time using codesandbox and it was quite enjoyable.


## Implementation
When Items is rendered, a fetch API (GET) request is sent to retrieve every country name. These names are stored in Items.state.items.

Every time the search term is changed, Items is rendered again.


## Testing
I used Jest/Enzyme for basic smoke tests. Unfortunately, I wasn't able to get Enzyme working with codesandbox.io, which i used for the demo.


## Todo
Other additional features I would eventually add depending on size of the dataset:
* If we were dealing with a huge dataset, I would limit the data retrieved and perhaps only fetch data after a search term has been typed.
* Add a keyup delay to prevent many requests while someone is still typing.
* Convert accented characters (Å for example) when comparing against search term.
