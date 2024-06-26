module.exports = ({ env }) => ({
  "drag-drop-content-types": {
    enabled: true,
  },
  "schemas-to-ts": {
    enabled: false,
    destinationFolder: "packages/strapi-types",
  },
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
