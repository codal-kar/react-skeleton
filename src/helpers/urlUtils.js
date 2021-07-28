export const getQueryParams = (name, url) => {
    // if (!url) url = location.href;
    try {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(url);
        return results == "" ? "" : results[1];
    } catch (e) {
        return ""
    }
}