/*global cordova, module*/

module.exports = {
    greet: function (name, success, errorCallback) {
        var successCallback = function(data) {
            success(data);
        };
		cordova.exec(successCallback, errorCallback, "Hello", "greet", [name]);
    }
};
