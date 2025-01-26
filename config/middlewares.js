module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      formLimit: "10mb", // modify form body
      jsonLimit: "10mb", // modify JSON body
      textLimit: "10mb", // modify text body
      formidable: {
        maxFileSize: 10 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
  // "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
