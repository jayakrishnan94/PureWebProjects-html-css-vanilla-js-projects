const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function createProject(projectName) {
    const projectsRoot = path.join(__dirname, 'projects');
    const projectRoot = path.join(projectsRoot, projectName);

    const directories = [
        'partials',
        'assets/images',
        'assets/fonts',
        'styles/modules',
        'scripts/modules'
    ];

    fs.mkdirSync(projectsRoot, { recursive: true });
    fs.mkdirSync(projectRoot);
    console.log(`Created directory: ${projectRoot}`);

    directories.forEach(directory => {
        const dirName = directory.replace('project-', '');
        const dirPath = path.join(projectRoot, dirName);
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`Created directory: ${dirPath}`);
    });

    const files = [
        'index.html',
        'partials/header.html',
        'partials/sidebar.html',
        'partials/footer.html',
        'styles/main.css',
        'styles/modules/header.css',
        'styles/modules/sidebar.css',
        'scripts/main.js',
        'scripts/modules/header.js',
        'scripts/modules/sidebar.js'
    ];

    const authorName = 'Jayakrishnan AV';
    const signature = `
********************************************
Author: ${authorName}
********************************************
`;

    files.forEach(file => {
        const fileName = file.replace('project-', '');
        const filePath = path.join(projectRoot, fileName);

        const extension = path.extname(filePath);
        const commentStyle = extension === '.html' ? '<!--' : '/*';

        const fileContent = `${commentStyle}${signature}${commentStyle === '<!--' ? '-->' : '*/'}`;

        fs.writeFileSync(filePath, fileContent, 'utf-8');
        console.log(`Created file: ${filePath}`);
    });
}

rl.question('Enter the name of the project: ', projectName => {
    createProject(projectName);
    rl.close();
});
