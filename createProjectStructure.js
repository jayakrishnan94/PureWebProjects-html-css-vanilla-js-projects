const fs = require('fs');
const path = require('path');

const directories = [
    'layout/partials',
    'layout/assets/images',
    'layout/assets/fonts',
    'layout/styles/modules',
    'layout/scripts/modules',
    'projects'
];

const files = [
    'layout/partials/header.html',
    'layout/partials/sidebar.html',
    'layout/partials/footer.html',
    'layout/styles/main.css',
    'layout/styles/variables.css',
    'layout/styles/theme.css',
    'layout/styles/modules/header.css',
    'layout/styles/modules/sidebar.css',
    'layout/scripts/main.js',
    'layout/scripts/modules/header.js',
    'layout/scripts/modules/sidebar.js'
];

const authorName = 'Your Name';
const signature = `
********************************************
Author: ${authorName}
********************************************
`;

const createDirectories = () => {
    directories.forEach(directory => {
        const dirPath = path.join(__dirname, directory);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
            console.log(`Created directory: ${dirPath}`);
        }
    });
};

const createFiles = () => {
    files.forEach(filePath => {
        const fullFilePath = path.join(__dirname, filePath);
        const extension = path.extname(filePath);
        const commentStyle = extension === '.html' ? '<!--' : '/*';

        const fileContent = `${commentStyle}${signature}${commentStyle === '<!--' ? '-->' : '*/'}`;
        fs.writeFileSync(fullFilePath, fileContent, 'utf-8');
        console.log(`Created file: ${fullFilePath}`);
    });
};

createDirectories();
createFiles();
