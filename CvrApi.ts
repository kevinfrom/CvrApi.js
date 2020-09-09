/**
 * CvrApi.js
 * @author Kevin From <kevinfrom@live.dk>
 * @website https://kevinfrom.dk
 */

class CvrApi {
    baseurl: string = 'cvrapi.dk/api';
    country: string;
    ssl: boolean;

    /**
     * Constructor
     * 
     * @param country 
     * @param ssl 
     */
    constructor(country: string = 'dk', ssl: boolean = true) {
        this.country = country;
        this.ssl = ssl;
    }

    /**
     * Get URL
     * 
     * @param query 
     * @param type 
     */
    getUrl(query: string, type: string = 'search') {
        return encodeURI(`http${this.ssl ? 's' : ''}://${this.baseurl}?${type}=${query}&country=${this.country}`)
    }

    /**
     * Execute request
     * 
     * @param url
     */
    execute(url: string) {
        const request = new XMLHttpRequest();
        request.open('GET', url, false);
        request.send();

        if (request.status === 200) {
            return JSON.parse(request.responseText)
        }
    }

    /**
     * Search
     * 
     * @param query 
     */
    search(query: string) {
        return this.execute(this.getUrl(query))
    }

    /**
     * Search by name
     * 
     * @param name 
     */
    searchByName(name: string) {
		return this.execute(this.getUrl(name, 'name'))
    }
    
    /**
     * 
     * Search by VAT
     * 
     * @param vat 
     */
    searchByVat(vat: string) {
		return this.execute(this.getUrl(vat, 'vat'))
    }

    /**
     * Search by CVR
     * 
     * @alias searchByVat
     * @param cvr 
     */
    searchByCvr(cvr: string) {
        return this.execute(this.getUrl(cvr, 'vat'))
    }

    /**
     * Search by production unit
     * 
     * @param productionUnit 
     */
    searchByProductionUnit(productionUnit: string) {
		return this.execute(this.getUrl(productionUnit, 'produ'))
    }
    
    /**
     * Search by phone
     * 
     * @param phone 
     */
    searchByPhone(phone: string) {
		return this.execute(this.getUrl(phone, 'phone'))
	}
}
