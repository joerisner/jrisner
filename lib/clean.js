import { rm } from 'fs';

const removeList = ['./.astro/', './dist/', './specs/artifacts/', './specs/report/', '.playwright/.cache/'];

const removeItem = (item) => {
  rm(item, { force: true, recursive: true }, (error) => {
    if (error) console.error(error);
  });
};

removeList.forEach((item) => removeItem(item));
