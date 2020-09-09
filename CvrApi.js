var CvrApi = (function () {
    function CvrApi(country, ssl) {
        if (country === void 0) { country = 'dk'; }
        if (ssl === void 0) { ssl = true; }
        this.baseurl = 'cvrapi.dk/api';
        this.country = country;
        this.ssl = ssl;
    }
    CvrApi.prototype.getUrl = function (query, type) {
        if (type === void 0) { type = 'search'; }
        var url = encodeURI("http" + (this.ssl ? 's' : '') + "://" + this.baseurl + "?" + type + "=" + query + "&country=" + this.country);
        return {
            url: url
        };
    };
    CvrApi.prototype.execute = function (ReqObj) {
        return new Promise(function (resolve, reject) {
            var _a;
            var xhr = new XMLHttpRequest();
            xhr.open((_a = ReqObj.method) !== null && _a !== void 0 ? _a : 'GET', ReqObj.url);
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(JSON.parse(xhr.response));
                }
                else {
                    reject(xhr.statusText);
                }
            };
            xhr.onerror = function () { return reject(xhr.statusText); };
            xhr.send();
        });
    };
    CvrApi.prototype.search = function (query) {
        return this.execute(this.getUrl(query));
    };
    CvrApi.prototype.searchByName = function (name) {
        return this.execute(this.getUrl(name, 'name'));
    };
    CvrApi.prototype.searchByVat = function (vat) {
        return this.execute(this.getUrl(vat, 'vat'));
    };
    CvrApi.prototype.searchByCvr = function (cvr) {
        return this.execute(this.getUrl(cvr, 'vat'));
    };
    CvrApi.prototype.searchByProductionUnit = function (productionUnit) {
        return this.execute(this.getUrl(productionUnit, 'produ'));
    };
    CvrApi.prototype.searchByPhone = function (phone) {
        return this.execute(this.getUrl(phone, 'phone'));
    };
    return CvrApi;
}());
