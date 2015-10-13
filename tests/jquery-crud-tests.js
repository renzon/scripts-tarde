$.get=function(url){
  console.log(url);
  var xhr={success:function(funcao){
    this.listarCategorias=funcao;
    return xhr
  },error:function(funcao){
    this.errorCallback=funcao;
    return xhr
  },always:function(funcao){
    this.alwaysCallback=funcao;
    return xhr
  }};

  return xhr;
};
