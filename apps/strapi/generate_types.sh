if [[ "$NODE_ENV" == "production" ]]; then
  echo "Error: Script cannot run in production environment."
  exit 1
fi
rm -rf ../../packages/strapi-types/types
npx schemas-to-ts generateInterfaces .  --destinationFolder  ./generated_types
mv -f ./generated_types ../../packages/strapi-types/types