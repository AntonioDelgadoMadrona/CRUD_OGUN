export interface IRequestOptionGet {
    method: 'GET';
    headers: any;
};

export interface IRequestOptionPost {
    method: 'POST';
    headers: any;
    body: string;
};

export interface IRequestOptionDelete {
    method: 'DELETE';
    headers: any;
};

export interface IRequestOptionPut {
    method: 'PUT';
    headers: any;
    body: string;
};