/**
 * CvrApi.js
 * @author Kevin From <kevinfrom@live.dk>
 * @website https://kevinfrom.dk
 */
var CvrApi = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param country
     * @param ssl
     */
    function CvrApi(country, ssl) {
        if (country === void 0) { country = 'dk'; }
        if (ssl === void 0) { ssl = true; }
        this.baseurl = 'cvrapi.dk/api';
        this.country = country;
        this.ssl = ssl;
    }
    /**
     * Get URL
     *
     * @param query
     * @param type
     */
    CvrApi.prototype.getUrl = function (query, type) {
        if (type === void 0) { type = 'search'; }
        return encodeURI("http" + (this.ssl ? 's' : '') + "://" + this.baseurl + "?" + type + "=" + query + "&country=" + this.country);
    };
    /**
     * Execute request
     *
     * @param url
     */
    CvrApi.prototype.execute = function (url) {
        var request = new XMLHttpRequest();
        request.open('GET', url, false);
        request.send();
        if (request.status === 200) {
            return JSON.parse(request.responseText);
        }
    };
    /**
     * Search
     *
     * @param query
     */
    CvrApi.prototype.search = function (query) {
        return this.execute(this.getUrl(query));
    };
    /**
     * Search by name
     *
     * @param name
     */
    CvrApi.prototype.searchByName = function (name) {
        return this.execute(this.getUrl(name, 'name'));
    };
    /**
     *
     * Search by VAT
     *
     * @param vat
     */
    CvrApi.prototype.searchByVat = function (vat) {
        return this.execute(this.getUrl(vat, 'vat'));
    };
    /**
     * Search by CVR
     *
     * @alias searchByVat
     * @param cvr
     */
    CvrApi.prototype.searchByCvr = function (cvr) {
        return this.execute(this.getUrl(cvr, 'vat'));
    };
    /**
     * Search by production unit
     *
     * @param productionUnit
     */
    CvrApi.prototype.searchByProductionUnit = function (productionUnit) {
        return this.execute(this.getUrl(productionUnit, 'produ'));
    };
    /**
     * Search by phone
     *
     * @param phone
     */
    CvrApi.prototype.searchByPhone = function (phone) {
        return this.execute(this.getUrl(phone, 'phone'));
    };
    return CvrApi;
}());
