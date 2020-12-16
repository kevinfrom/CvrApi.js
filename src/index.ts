/**
 * CvrApi.js
 * @author Kevin From <kevinfrom@live.dk>
 * @website https://kevinfrom.dk
 */

class CvrApi {
    private baseurl: string = 'cvrapi.dk/api';
    private country: string = 'dk';

    /**
     * Constructor
     * 
     * @param country 
     * @param ssl 
     */
    constructor(country: string = 'dk') {
        this.country = country;
    }

    /**
     * Get URL
     * 
     * @param query 
     * @param type 
     */
    private getUrl(query: string, type: string = 'search') {
        return encodeURI(`https://${this.baseurl}?${type}=${query}&country=${this.country}`);
    }

    /**
     * Execute request and return JSON parsed response
     * 
     * @param string url
     */
    private async execute(url: string) {
        const response = await fetch(url)
        const result = await response.json()

        return result
    }

    /**
     * Search
     * 
     * @param query 
     */
    async search(query: string) {
        const result = await this.execute(this.getUrl(query))
        return result
    }

    /**
     * Search by name
     * 
     * @param name 
     */
    async searchByName(name: string) {
        const result = await this.execute(this.getUrl(name, 'name'))
        return result
    }

    /**
     * 
     * Search by VAT
     * 
     * @param vat 
     */
    async searchByVat(vat: string) {
        const result = await this.execute(this.getUrl(vat, 'vat'))
        return result
    }

    /**
     * Search by CVR
     * 
     * @alias searchByVat
     * @param cvr 
     */
    async searchByCvr(cvr: string) {
        const result = await this.execute(this.getUrl(cvr, 'vat'))
        return result
    }

    /**
     * Search by production unit
     * 
     * @param productionUnit 
     */
    async searchByProductionUnit(productionUnit: string) {
        const result = await this.execute(this.getUrl(productionUnit, 'produ'))
        return result
    }

    /**
     * Search by phone
     * 
     * @param phone 
     */
    async searchByPhone(phone: string) {
        const result = await this.execute(this.getUrl(phone, 'phone'))
        return result
    }
}
