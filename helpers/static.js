class appStatic {
  constructor(req){
    this.req = req
  }

  baseUrl(url){
    return url+'/'+this.req;
  }
}

