# Dartmouth Add Drop Script 
"like a Supreme drop bot but for classes at Darmouth" 
Rough working version, further development needed, made while waiting for a/d to open 

## Usage

Must be logged into BannerStudent (completed Duo authentication) on Chromium 

    node adddrop.js [CRN LIST] 
 
 * CRN LIST - List of 3 CRNs 
 
 Example: 
 
    node adddrop.js 31385 31195 31168

## Dependencies 

* nodejs
* Puppeteer https://github.com/puppeteer/puppeteer

## Contributing

To do: 

* Validate user input 
* Allow 4 class sign up 
* Automatically try at midnight and continue until successful 
* Detect if classes have availbility 
* Get passed Duo Authentication in a better way 

## License 

GPL 
