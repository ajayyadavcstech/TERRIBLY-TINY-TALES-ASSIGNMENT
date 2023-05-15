## Components Description

### `App.js`
Inside this component i imported Button and Called Button component inside div element

### `ExportButton.js`
This is button where in uses CSVLink

### `Button.js`
When i click on button then fetchData function called data will be loaded if data length is greater than 0 
--- fetchData funcion Working ---
-> First I created a state variable data using useState
-> fetch the data from given link "https://www.terriblytinytales.com/test.txt"
-> split the data and stored it into the wordList variable
-> Store all the frequency into wordList 
-> Sort the data in decreasing order of the frequency
-> Store top 20 data into the variable top20Data
-> set useState data to top20Data

### `Histogram.js`
-> imported Chart ,BarElement,CategoryScale,LinearScale,Tooltip,Legend from 'char.js'
-> cerated variable chartData and sets the labels and datasets of graph

### `Module used`
-> Histogram : To plot the graph i used this module

### 'Hooks used`
-> useState
