# Vite React, Typescript Starter Project

This is a starter project for building a React application with Vite and Typescript.

## Files

- `index.html`: The entry HTML file that serves as the template for the app. This file is used by Vite to generate the final `index.html` file that gets served to the browser.

- `src/index.tsx`: The entry point for the application. This file sets up the root React component and renders it to the DOM.

- `src/App.tsx`: The main React component that represents the entire application. You can modify this component to add or remove functionality from the app.

- `src/components/`: This directory contains React components that can be reused throughout the application. You can add new components to this directory as needed.

- `vite.config.ts`: The configuration file for Vite. You can modify this file to change the behavior of Vite, such as adding plugins or modifying the dev server settings.

- `tsconfig.json`: The configuration file for Typescript. You can modify this file to change the behavior of the Typescript compiler, such as adding or removing type checking rules.

- `package.json`: The package file for the project. This file lists the dependencies and scripts for the project.


## Scripts

- `dev`: Starts the development server.

- `build`: Builds the project for production.



## Getting Started

- Clone the repository.

- Install node using [NVM](https://github.com/nvm-sh/nvm) 

  ### Install NVM

    1. Install NVM using the following command:
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    ```

    2. Reload the bash profile:
    ```bash
    source ~/.bashrc
    ```

    3. Verify the installation by running the following command:
    ```bash
    nvm -v
    ```

  ### Install Node

    1. Install Node using the following command (we'll be using Node 16):
    ```bash
    nvm install 16
    ```

    2. Verify the installation by running the following command:
    ```bash
    node -v
    ```

  ### Install Yarn

    1. Install Yarn using the following command:
    ```bash
    corepack enable
    ```

- Run `yarn install` to install the dependencies.

- Copy the `conf/app-frontend.conf` file to `/etc/httpd/conf.d/grnoc/`

  This file is used to configure Apache to serve the app from the `/app/` path.

  ```bash
  sudo cp conf/app-frontend.conf /etc/httpd/conf.d/grnoc/
  ```

  Reload Apache to apply the changes.

  ```bash
  sudo systemctl reload httpd
  ```

- Run `yarn run dev` to start the development server.

- Open `${hostname}/app/` in a web browser to view the app.

- Modify the files in the `src/` directory to customize the app to your needs.


## Next Steps


1. **Create a Simple Counter Component**

Create a simple React component that displays a counter and allows the user to increment or decrement the count. The component should be written in Typescript and use React hooks.

2. **Fetch and Display Data from an API**

Update the above example to fetch data from the pokedex API [https://pokeapi.co/](https://pokeapi.co/) that fetches 10 pokemons at a time and displays the name and url of each pokemon in a table. When the next button is clicked, the next 10 pokemons should be fetched and displayed. And when the previous button is clicked, the previous 10 pokemons should be fetched and displayed.

- Page 1 -> https://pokeapi.co/api/v2/pokemon?limit=10&offset=0
- Page 2 -> https://pokeapi.co/api/v2/pokemon?limit=10&offset=10
- Page 3 -> https://pokeapi.co/api/v2/pokemon?limit=10&offset=20
- and so on...




