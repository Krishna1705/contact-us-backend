let appConfig={};
appConfig.port=3000;
appConfig.allowedOrigin="*";
appConfig.env="dev";
appConfig.db={
    uri:"mongodb://127.0.0.1:27017/kajal"
};
appConfig.apiVersion="/api/v1";

module.exports={
    port:appConfig.port,
    allowedOrigin:appConfig.allowedOrigin,
    env:appConfig.env,
    db:appConfig.db,
    apiVersion:appConfig.apiVersion
}