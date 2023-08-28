# PureWebProjects-html-css-vanilla-js-projects

Explore clean, impactful projects using HTML, CSS, and vanilla JavaScript in the PureWebProjects repository. Ideal for learners and enthusiasts seeking simple and effective web solutions and examples.

## Project Architecture

The project architecture outlines the directory structure for your web projects. It's organized in a modular way to ensure separation of concerns and maintainability. The architecture consists of two main components: the `layout` and `projects` directories.

### `layout` Directory

The `layout` directory contains the common components and assets that will be shared across all projects. Here's a breakdown of its contents:

- **partials**: This directory holds the partial HTML files that define common components such as header, sidebar, and footer.

- **assets/images**: This directory is for storing image files that will be used across all projects.

- **assets/fonts**: This directory is for storing font files that will be used across all projects.

- **styles**: This directory contains the main CSS files, as well as the modular CSS files for different components. It also includes files for variables and theme definitions.

- **scripts**: This directory contains the main JavaScript file and modular JavaScript files for different components.

### `projects` Directory

The `projects` directory is where individual project-specific files will be placed. Each project can have its own HTML, CSS, and JavaScript files. This separation allows you to create different projects within the same architecture.

## `createProjectStructure.js` Script

The `createProjectStructure.js` script automates the creation of the project architecture by generating the necessary directories, subdirectories, and placeholder files according to the specified directory structure. This script is designed to help you kickstart your web projects with a consistent and modular organization.

- **Directory Creation**: The script defines and creates the specified directory structure for the project.

- **File Generation**: It generates placeholder files in each subdirectory, providing a foundation for your projects.

- **Enhancement**: The script includes a signature with your name at the beginning of each placeholder file. This signature is enclosed in appropriate comment syntax based on the file type.

## `createProject.js` Script

The `createProject.js` script complements `createProjectStructure.js` by facilitating the creation of individual projects within the `projects` directory.

- **User Input**: The script prompts you to enter a project name.

- **Project Directory Creation**: Once you provide a project name, the script creates a directory for the project under the `projects` directory.

- **Content Duplication**: It copies content from corresponding `layout` directories to the project-specific directory, preserving the architecture while allowing customization.

Both scripts combined make it easy to set up projects with a standardized structure, ready for your specific content and creativity.

## Architecture Diagram

