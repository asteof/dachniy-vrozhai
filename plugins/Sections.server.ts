import { SectionsEnum } from '~/utils/types/SectionsTypes';
import type { SectionsMap } from '~/utils/types/SectionsTypes';
import { readFileSync } from 'fs';
import path from 'path';
import type { Category } from '~/utils/generator/classes/Category';

export default defineNuxtPlugin(() => {
  const rootPath = process.cwd();
  const jsonContentFolder = path.resolve(rootPath, 'constants', 'content');

  const readCategoryJSONFile = (fileName: string) => {
    const fileNameWithExtension = `${fileName}.json`;
    const filePath = path.resolve(jsonContentFolder, fileNameWithExtension);
    return readFileSync(filePath);
  };

  const sectionCategoriesMap = Object.keys(SectionsEnum).reduce(
    (acc, sectionName) => {
      const categories = JSON.parse(String(readCategoryJSONFile(sectionName))) as Category[];

      // console.log('categories', categories);
      // console.log('sectionName', sectionName);

      return {
        ...acc,
        [sectionName]: categories,
      };
    },
    {} as SectionsMap<Category[]>,
  );

  const { setSectionsMap, setContentSections } = useSectionsStore();
  setSectionsMap(sectionCategoriesMap);
  setContentSections(sectionCategoriesMap);
});
