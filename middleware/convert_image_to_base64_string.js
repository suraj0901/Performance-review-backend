/**
 * @type {import("express").RequestHandler}
 */
async function convert_image_to_base64_string(request, _response, next) {
  /**@type {Blob} */
  const profile = request.files;
  const base64_string = Buffer.from(profile[0].buffer).toString("base64");
  request.body.profile = base64_string;
  next();
}

export default convert_image_to_base64_string;
