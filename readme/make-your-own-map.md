# Tips and tools to make your own map
I recommend checking an existing tracker to use as a template. Each map has a .js file in the "games" folder detailing all the locations, warps, marks, etc. and a named folder in the "images" folder. This folder structure needs to be preserved.

So each map takes less time to load the images are compressed using [PNGGauntlet](https://pnggauntlet.com/) for Windows ([trimage](https://trimage.org/) seems a good alternative for Mac & Linux).

## Debug mode
To activate it, add `?debug` to the url in your browser. This mode will enable:
- **Middle clicking** on the map or a location will give you the coordinates for the mouse and copy them into your clipboard (which then can be copypasted in your own .js file).
- Pressing **Q** show the name of the warps.
- Pressing **W** shows the internal name of the warps.
- The last open location will be remembered so it opens automatically if you refresh the tracker.
- An ordered list of all the image dimensions is being printed in the console. The tracker's dimensions are being decided by the largest images in your map, so if you reduce the biggest one's you'll be able to reduce the size of the tracker.
- Tests are run, if you're not changing the HTML or the code it shouldn't affect your work.

## .js fields
Each .js file declares a single variable which describes everything about a map. This variable needs to be given a unique name and then added to the main.js file.

First, there's a bunch of metadata at the top of the file:
- `folder`: name of the folder in `images` is going to be using
- `name`: name of the .png minimap in the folder
- `debug`: if not set to `false`, the map will only be available in debug mode
- `start_location`: name of the starting location 
- `font`: font used to render the location name in the minimap
- `font_size`: size of the previous font (not the one drawn in the location itself)
- `is_item_tracker`: used for warp + item trackers
- `config_name`: name shown in the config window (where the user can load the different maps)
- `config_randomizer_author`: name of the randomizer author
- `config_randomizer_link`: link for the randomizer author
- `config_tracker_author`: name of the map author
- `config_tracker_link`: link for the map author

There's 5 additional fields with different field specificators: `locations`, `warps`, `marks`, `progress` and `modifiers`. Each of these are objects or lists which require further explanation.

`locations`: each entry corresponds to a .png in the `images\<NAME_GAME>\maps` folder
- `x`, `y`, `w`, `h`: the x and y coordinates of the box in the minimap as well as its width and height
- `name`: display name. A single new line (`\n`) is allowed

`warps`: each entry corresponds to an entry to the `locations` list and contains several entries that correspond to each individual "?" in the map
- `x`, `y`: x and y coordinates of the warp in the image
- `name`: name used when another warp links to it. If undefined it'll pick the first line of the location name
- `corridor`: if defined it will be treated as a corridor. Ideally it points to the other side of the corridor (or to itself if it's a dead end), but currently the value itself is unused`
- `item`: only used if `is_item_tracker` is turned on. The name specifies which image should it use as its icon
- `text_offset`: offset of the textbox rendered relative to where the icon would be rendered


`marks`, `progress`, `modifiers` represent a 2D grid (a list of lists). Elements are rendered in order. Each of the lists represents a column in `modifiers` and a row in `marks` & `progress`. Each item has two values:
1. a string which defines the image or color to render
2. either a `0` (mark will be tracked), `null` (mark won't be tracked) or `undefined` (mark won't be rendered)