# CvrApi.js

## Installation
npm:
```
npm i kevinfrom/CvrApi.js
```
yarn:
````
yarn add kevinfrom/CvrApi.js
````

## Demoes
Demoes for both ES6 and older browsers can be found in the ``demo``directory

## Examples (ES6)
ES6 (ECMAScript 2015):
````
<script src="node_modules/kevinfrom/CvrApi.js/dist/CvrApi.es6.js"><script>
<script>
    let cvrApi = new CvrApi();

    cvrApi.search('Vestjysk Marketing');
</script>
````

IE11 and Safari >= 9:
````
<script src="node_modules/kevinfrom/CvrApi.js/dist/CvrApi.min.js"><script>
<script>
    var cvrApi = new CvrApi();

    cvrApi.search('Vestjysk Marketing');
</script>
````

### Country
Set a different country:
````
<script>
    var cvrApi = new CvrApi('de');
</script>
````

### SSL/HTTPS
Disable SSL/HTTPS (default true):
````
<script>
    var cvrApi = new CvrApi('da', false);

    cvrApi.search('Vestjysk Marketing');
</script>
````

### Query search
Search using query (integer/string):
````
<script>
    var cvrApi = new CvrApi();

    cvrApi.search('Vestjysk Marketing');
</script>
````

### Search by company name
Search by name (string):
````
<script>
    var cvrApi = new CvrApi();

    cvrApi.searchByName('Vestjysk Marketing');
</script>
````

### Search by VAT
Search by VAT (integer/string):
````
<script>
    var cvrApi = new CvrApi();

    cvrApi.searchByVat(10029155);
</script>
````

### Search by CVR
Alias of searchByVat

Search by CVR (integer/string):
````
<script>
    var cvrApi = new CvrApi();

    cvrApi.searchByCvr(10029155);
</script>
````

### Search by production unit
Search by production unit (integer/string):
````
<script>
    var cvrApi = new CvrApi();

    cvrApi.searchByProductionUnit(1007740219);
</script>
````

### Search by phone
Search by phone (integer/string):
````
<script>
    var cvrApi = new CvrApi();

    cvrApi.searchByPhone(97320108);
</script>
````
