## Components Description

### `App.js`
Inside this component i imported Button and Called Button component inside div element

### `ExportButton.js`
This is button where in uses CSVLink

### `Button.js`
When i click on button then fetchData function called data will be loaded if data length is greater than 0 </br>
--- fetchData funcion Working --- </br>
-> First I created a state variable data using useState </br>
-> fetch the data from given link "https://www.terriblytinytales.com/test.txt" </br>
-> split the data and stored it into the wordList variable </br>
-> Store all the frequency into wordList  </br>
-> Sort the data in decreasing order of the frequency </br>
-> Store top 20 data into the variable top20Data </br>
-> set useState data to top20Data </br>

### `Histogram.js`
-> imported Chart ,BarElement,CategoryScale,LinearScale,Tooltip,Legend from 'char.js' </br>
-> cerated variable chartData and sets the labels and datasets of graph </br>

### `Module used`
-> Histogram : To plot the graph i used this module

### 'Hooks used`
-> useState
