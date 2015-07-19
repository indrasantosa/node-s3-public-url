/**
 * node-s3-encode-url
 */

function publicS3URI(string) {
	return encodeURIComponent(string)
		.replace(/%20/img, '+')
		.replace(/%2F/img, '/')
    .replace(/\"/img, "%22")
    .replace(/\#/img, "%23")
    .replace(/\$/img, "%24")
    .replace(/\&/img, "%26")
    .replace(/\'/img, "%27")
		.replace(/\(/img, "%28")
    .replace(/\)/img, "%29")
    .replace(/\,/img, "%2C")
    .replace(/\:/img, "%3A")
    .replace(/\;/img, "%3B")
    .replace(/\=/img, "%3D")
    .replace(/\?/img, "%3F")
    .replace(/\@/img, "%40");
}

if(module) {
	module.exports = publicS3URI;
}
