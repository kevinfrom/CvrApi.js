interface RequestObject {
    url: string;
    method?: string;
}
declare class CvrApi {
    private baseurl;
    private country;
    private ssl;
    constructor(country?: string, ssl?: boolean);
    private getUrl;
    private execute;
    search(query: string): Promise<unknown>;
    searchByName(name: string): Promise<unknown>;
    searchByVat(vat: string): Promise<unknown>;
    searchByCvr(cvr: string): Promise<unknown>;
    searchByProductionUnit(productionUnit: string): Promise<unknown>;
    searchByPhone(phone: string): Promise<unknown>;
}
