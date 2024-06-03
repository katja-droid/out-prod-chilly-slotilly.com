import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());
console.log(rootFolder);

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}`,
    files: `${buildFolder}/files/`,
    images: `${buildFolder}/img/`,
    r1: `${buildFolder}/R1/`,
    r2: `${buildFolder}/R2/`,
    r3: `${buildFolder}/R3/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    svg: `${srcFolder}/img/**/*.svg`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    r1: `${srcFolder}/R1/**/*.html`,
    r2: `${srcFolder}/R2/**/*.html`,
    r3: `${srcFolder}/R3/**/*.html`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,ico,gif,webp}`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    r1: `${srcFolder}/R1/**/*.html`,
    r2: `${srcFolder}/R2/**/*.html`,
    r3: `${srcFolder}/R3/**/*.html`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};
