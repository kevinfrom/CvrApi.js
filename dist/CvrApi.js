"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * CvrApi.class.js
 * @author Kevin From <kevinfrom@live.dk>
 * @website https://kevinfrom.dk
 */
var CvrApi = /*#__PURE__*/function () {
  function CvrApi() {
    var country = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'dk';
    var ssl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    _classCallCheck(this, CvrApi);

    this.baseUrl = 'cvrapi.dk/api';
    this.country = country;
    this.ssl = ssl;
  }

  _createClass(CvrApi, [{
    key: "getUrl",
    value: function getUrl(query) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'search';
      return encodeURI((this.ssl ? 'https://' : 'http://') + this.baseUrl + '?' + type + '=' + query + '&country=' + this.country);
    }
  }, {
    key: "execute",
    value: function execute(url) {
      var request = new XMLHttpRequest();
      request.open('GET', url, false);
      request.send(null);

      if (request.status === 200) {
        return JSON.parse(request.responseText);
      }
    }
  }, {
    key: "search",
    value: function search(query) {
      return this.execute(this.getUrl(query));
    }
  }, {
    key: "searchByName",
    value: function searchByName(name) {
      return this.execute(this.getUrl(name, 'name'));
    }
  }, {
    key: "searchByVat",
    value: function searchByVat(vat) {
      return this.execute(this.getUrl(vat, 'vat'));
    }
  }, {
    key: "searchByCvr",
    value: function searchByCvr(cvr) {
      return this.execute(this.getUrl(cvr, 'vat'));
    }
  }, {
    key: "searchByProductionUnit",
    value: function searchByProductionUnit(productionUnit) {
      return this.execute(this.getUrl(productionUnit, 'produ'));
    }
  }, {
    key: "searchByPhone",
    value: function searchByPhone(phone) {
      return this.execute(this.getUrl(phone, 'phone'));
    }
  }]);

  return CvrApi;
}();